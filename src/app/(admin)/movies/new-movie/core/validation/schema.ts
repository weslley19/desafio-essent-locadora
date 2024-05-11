import { z } from "zod";

export const newMovieSchema = z.object({
  title: z.string().min(3, 'Mínimo de 3 caracteres'),
  year: z.string().min(4, 'Mínimo de 4 caracteres').max(4, 'Máximo de 4 caracteres'),
  image: z.string().min(1, 'Mínimo de 1 caracteres'),
  synopsis: z.string().min(30, 'Mínimo de 30 caracteres').max(255, 'Máximo de 255 caracteres'),
  cast: z.array(z.object({
    id: z.number(),
    value: z.string().min(1, 'Mínimo de 1 caracteres')
  })),
  category: z.string().min(1, 'Mínimo de 1 caracteres'),
  value: z.string().min(1, 'Mínimo de 1 caracteres'),
  copies: z.number().min(1, 'Mínimo de 1 caracteres'),
})

export type NewMovieForm = z.infer<typeof newMovieSchema>

export const initValues = {
  title: '',
  year: '',
  image: '',
  synopsis: '',
  cast: [],
  category: '',
  value: '',
  copies: 1,
}
