import { z } from "zod";

export const newMovieSchema = z.object({
  title: z.string().min(3, 'Mínimo de 3 caracteres'),
  releaseYear: z.string().min(4, 'Mínimo de 4 caracteres').max(4, 'Máximo de 4 caracteres'),
  image: z.string(),
  synopsis: z.string().min(30, 'Mínimo de 30 caracteres').max(255, 'Máximo de 255 caracteres'),
  cast: z.array(z.string().min(1, 'Máximo de 1 caracteres')),
  categoryId: z.string().min(1, 'Mínimo de 1 caracteres'),
  rentalValue: z.string().min(1, 'Mínimo de 1 caracteres'),
  availableCopies: z.number().min(1, 'Mínimo de 1 caracteres'),
})

export type NewMovieForm = z.infer<typeof newMovieSchema>

export const initValues = {
  title: '',
  releaseYear: '',
  image: '',
  synopsis: '',
  cast: [],
  categoryId: '',
  rentalValue: '',
  availableCopies: 1
}
