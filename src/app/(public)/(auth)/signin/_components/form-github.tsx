import { redirect } from "next/navigation";
import { auth } from "../../../../../../auth";
import { loginGithub } from "../actions";

export default async function FormGithub () {
  const session = await auth()
  if (session) {
    redirect('/')
  }

  return (
    <form action={loginGithub}>
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}
