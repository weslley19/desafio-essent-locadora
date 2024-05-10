import { z } from "zod";

export const createPersonSchema = z.object({
  name: z.string().min(3, 'Mínimo de 3 caracteres').max(255),
  email: z.string().email('E-mail inválido').min(1, 'Mínimo de 1 caracteres'),
  password: z.string().min(6, 'Mínimo de 6 caracteres').max(10)
})

export type CreatePersonForm = z.infer<typeof createPersonSchema>

export const initValues = {
  name: '',
  email: '',
  password: ''
}