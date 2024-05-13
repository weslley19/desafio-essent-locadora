import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(3, 'Mínimo de 3 caracteres')
})

export type CategoryForm = z.infer<typeof categorySchema>

export const initValues = {
  name: '',
}
