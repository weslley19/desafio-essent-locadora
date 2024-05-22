import { z } from "zod"

export const loginSignin = z.object({
  username: z.string().min(1, 'Usuário é obrigatório').min(3, 'Mínimo de caracteres'),
  password: z.string().min(1, 'Senha é obrigatório').min(6, 'Mínimo de 6 caracteres')
})

export type SigninForm = z.infer<typeof loginSignin>

export const initValues = {
  username: '',
  password: ''
}
