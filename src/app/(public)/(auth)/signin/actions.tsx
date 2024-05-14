import { signIn } from "../../../../../auth";

export async function loginGithub() {
 await signIn("github")
}
