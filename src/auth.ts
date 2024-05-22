import NextAuth from "next-auth"
import Credetials from "next-auth/providers/credentials"
import { verifyLogin } from "@/app/(public)/signin/_components/form-signin/actions"
import { UserLogin } from "./types/user"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credetials({
      credentials: {
        username: {},
        password: {}
      },
      authorize: async (credentials, request) => {
        const user = await verifyLogin(credentials as unknown as UserLogin)
        if (user) {
          return { id: user.id, name: user.name, username: user.username, email: user.email }
        } else {
          return null
        }
      }
    })
  ],
})
