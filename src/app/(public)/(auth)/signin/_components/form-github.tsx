import { redirect } from "next/navigation";
import { auth, signIn } from "../../../../../../auth";
import { loginGithub } from "../actions";

export default async function FormGithub () {
  const session = await auth()
  console.log(session)
  if (session) {
    redirect('/')
  }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit">Entrar com GitHub</button>
    </form>
  )
}
