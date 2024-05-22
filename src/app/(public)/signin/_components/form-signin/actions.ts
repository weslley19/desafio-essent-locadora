"use server"

import { server } from "@/service/api"
import { User, UserLogin } from "@/types/user"
import { DefaultRequest } from "@/types/common"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"

export async function login(payload: UserLogin) {
  try {
    await signIn("credentials", payload)
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw err
  }
}

export async function verifyLogin(payload: UserLogin) {
  try {
    const response = await server.post<DefaultRequest<User>>('/signin', payload)
    if (response.status === 200) {
      return response.data.data
    }
    return null
  } catch (err) {
    return null
  }
}

