import NextAuth from 'next-auth' // eslint-disable-line

declare module 'next-auth' {
  // Represents the user information
  interface UserInfo {
    sub: string
    contract: ContractInfo
    name: string
    email: string
    email_verified: boolean
  }

  // Represents contract information
  interface ContractInfo {
    id: string
    user_id: string
    is_owner: boolean
  }

  // Represents the session object
  interface Session {
    accessToken: string
    refreshToken: string
    user: UserInfo
  }
}
