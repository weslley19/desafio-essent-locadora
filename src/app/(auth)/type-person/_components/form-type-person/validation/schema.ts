import { z } from "zod";

export const typePersonSchema = z.object({
  name: z.string().min(3, 'Mínimo de 3 caracteres'),
})

export type TypePersonForm = z.infer<typeof typePersonSchema>

export const initValues = {
  name: ''
}
