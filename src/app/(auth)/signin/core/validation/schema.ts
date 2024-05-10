import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido').min(1, 'Mínimo de 1 caracteres'),
  password: z.string().min(6, 'Mínimo de 6 caracteres').max(10)
})

export type LoginForm = z.infer<typeof loginSchema>

export const initValues = {
  email: '',
  password: ''
}
