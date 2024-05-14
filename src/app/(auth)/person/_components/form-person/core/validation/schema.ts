import { z } from "zod";

export const createPersonSchema = z.object({
  name: z.string().min(3, 'Mínimo de 3 caracteres').max(255),
  birthday: z.string().min(1, 'Mínimo de 1 caracteres'),
  cpf: z.string().refine((cpf) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf), {
    message: 'CPF inválido',
  }),
  TypePersonType: z.string().min(1, 'Mínimo de 1 caracteres')
})

export type CreatePersonForm = z.infer<typeof createPersonSchema>

export const initValues = {
  name: '',
  birthday: '',
  cpf: '',
  TypePersonType: ''
}
