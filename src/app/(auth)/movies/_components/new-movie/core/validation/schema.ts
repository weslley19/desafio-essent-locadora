import { z } from "zod"

const MAX_FILE_SIZE = 5000000

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]

export const newMovieSchema = z.object({
  title: z.string().min(3, 'Mínimo de 3 caracteres'),
  releaseYear: z.string().min(4, 'Mínimo de 4 caracteres').max(4, 'Máximo de 4 caracteres'),
  image: z.any()
  // .refine(
  //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   ".jpg, .jpeg, .png"
  // )
  // .refine(
  //   (file) => file.size <= MAX_FILE_SIZE, 'Tamanho máximo é 5MB'
  // )
  ,
  synopsis: z.string().min(30, 'Mínimo de 30 caracteres').max(255, 'Máximo de 255 caracteres'),
  cast: z.array(z.number()),
  categoryId: z.string().min(1, 'Mínimo de 1 caracteres'),
  rentalValue: z.string().min(1, 'Mínimo de 1 caracteres'),
  availableCopies: z.string().min(1, 'Mínimo de 1 caracteres'),
  directorId: z.string().min(1, 'Mínimo de 1 caracteres'),
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
  availableCopies: '',
  directorId: ''
}
