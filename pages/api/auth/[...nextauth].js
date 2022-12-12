import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60 * 3 // 3 days
  },
  providers: [
    CredentialsProvider({
      name: 'plabos',
      credentials: {
        login: { label: 'Login', type: 'text' },
        password: { labe: 'Password', type: 'password' }
      },
      id: 'plabos',
      type: 'credentials',
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
          method: 'POST',
          body: JSON.stringify({
            login: credentials.login,
            password: credentials.password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const payload = await res.json()
        console.log("Login payload:", payload)

        if (payload.detail) {
          if (Array.isArray(payload.detail)) {
            throw new Error(payload.detail[0].msg)
          } else {
            throw new Error(payload.detail)
          }
        }

        if (payload) {
          return payload
        }

        throw new Error(payload.detail)
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access_token = user.access_token
        token.name = user.name
        token.login = user.login
        token.id = user.id
      }
      return token
    },
    async session({ session, token, user }) {
      session.user = {
        login: token.login,
        id: Number(token.id), // This is dumb, but i did it anyway.
        access_token: token.access_token,
        name: token.name
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
    error: '/'
  }
})