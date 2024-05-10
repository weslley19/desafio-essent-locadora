import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, 'Mínimo de 3 caracteres'),
  email: z.string().email('E-mail inválido').min(1, 'Mínimo de 1 caracteres'),
  password: z.string().min(6, 'Mínimo de 6 caracteres').max(10)
})

export type RegisterForm = z.infer<typeof registerSchema>

export const initValues = {
  name: '',
  email: '',
  password: ''
}
