import { NextAuthOptions } from 'next-auth'
import SmaregiProvider from './smaregi-provider'

interface ContractInfo {
  id: string
  user_id: string
  is_owner: boolean
}

interface UserInfo {
  sub: string
  contract: ContractInfo
  name: string
  email: string
  email_verified: boolean
}

async function getUserInfo(userAccessToken: string): Promise<UserInfo> {
  const response = await fetch(`${process.env.TOKEN_ENDPOINT}/userinfo`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userAccessToken}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Error response body:', errorText)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = (await response.json()) as UserInfo
  // Consider using a type guard to validate the structure
  return data
}

export const authOptions: NextAuthOptions = {
  providers: [
    SmaregiProvider({
      clientId: process.env.SMAREGI_CLIENT_ID || '',
      clientSecret: process.env.SMAREGI_CLIENT_SECRET || '',
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET || '',
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        try {
          const user = await getUserInfo(account.access_token)
          token.accessToken = account.access_token
          token.refreshToken = account.refresh_token
          token.user = user
        } catch (error) {
          console.error('ログみてね', error)
        }
      }

      return token
    },
    session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      session.user = token.user as UserInfo

      return session
    },
  },
}
