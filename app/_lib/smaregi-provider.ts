import type { OAuthConfig, OAuthUserConfig } from 'next-auth/providers/oauth'
import { createHash } from 'crypto'
import { Buffer } from 'buffer'

interface SmaregiProfile {
  sub: string
  email: string
  email_verified: boolean
  name: string
}

const generateRandomString = (length: number): string => {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join('')
}

const generatePKCE = () => {
  const codeVerifier = generateRandomString(128)
  const codeChallenge = createHash('sha256').update(codeVerifier).digest('base64url')
  const state = generateRandomString(16)
  return { codeVerifier, codeChallenge, state }
}

interface TokenRequestContext {
  params: {
    code: string
    code_verifier: string
  }
  client: {
    client_id: string
    client_secret: string
    redirect_uris: string[]
  }
}

async function makeTokenRequest(context: TokenRequestContext) {
  const { code } = context.params
  const { client_id, client_secret, redirect_uris } = context.client
  const code_verifier = context.params.code_verifier

  console.log(context)

  try {
    const tokenUrl = process.env.TOKEN_ENDPOINT || ''

    const response = await fetch(`${tokenUrl}/authorize/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirect_uris[0],
        code_verifier,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response body:', errorText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching tokens:', error)
    throw error
  }
}

export default function SmaregiProvider<P extends Record<string, any> = SmaregiProfile>(
  options: OAuthUserConfig<P>,
): OAuthConfig<P> {
  const { codeVerifier, codeChallenge, state } = generatePKCE()

  return {
    id: 'smaregi',
    name: 'Smaregi',
    type: 'oauth',
    version: '2.0',
    scope: process.env.SCOPE, 
    params: { grant_type: 'authorization_code' },
    accessTokenUrl: `${process.env.TOKEN_ENDPOINT}/authorize/token` || '',
    profileUrl: `${process.env.TOKEN_ENDPOINT}/userinfo`,
    profile(profile: SmaregiProfile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        emailVerified: profile.email_verified,
      }
    },
    authorization: {
      url: `${process.env.TOKEN_ENDPOINT}/authorize`,
      params: {
        response_type: 'code',
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
        state,
        scope: process.env.SCOPE,
      },
    },
    token: {
      url: `${process.env.TOKEN_ENDPOINT}/authorize/token`,
      async request(context) {
        const tokens = await makeTokenRequest({
          ...context,
          params: {
            ...context.params,
            code_verifier: codeVerifier,
          },
        })
        return { tokens }
      },
    },
    ...options,
  }
}
