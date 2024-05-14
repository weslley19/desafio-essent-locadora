"use server"

import { signOut } from "../../../auth";

export default async function logout() {
  console.log('logged out')
  await signOut({
    redirectTo: '/site'
  })
}
