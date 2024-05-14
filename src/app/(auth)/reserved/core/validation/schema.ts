import { z } from "zod";

export const reservedSchema = z.object({
  locator: z.string().min(3, 'Mínimo de 3 caracteres'),
  movie: z.string().min(1, 'Mínimo de 1 caracteres'),
  withdrawal: z.string().min(1, 'Mínimo de 1 caracteres'),
  devolution: z.string().min(1, 'Mínimo de 1 caracteres'),
  hour: z.string().min(1, 'Mínimo de 1 caracteres'),
  multa: z.string().min(1, 'Mínimo de 1 caracteres'),
  total: z.string().min(1, 'Mínimo de 1 caracteres'),
})

export type ReservedForm = z.infer<typeof reservedSchema>

export const initValues = {
  locator: '',
  movie: '',
  withdrawal: '',
  devolution: '',
  hour: '',
  multa: '',
  total: '',
}
