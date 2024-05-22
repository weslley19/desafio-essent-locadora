import { MovieCategory } from "@prisma/client"

export interface Movie {
  id: number
  title: string
  releaseYear: string
  image?: File | string
  synopsis: string
  categoryId: string
  category?: MovieCategory
  rentalValue: string
  availableCopies: number | string
  // cast: Person[]
  cast: string[] | number[] | Array<{ id: number | string, label: string, value: string }>
  createdAt?: string
  updatedAt?: string
  directorId: string | number
}

export interface CreateMovie extends Omit<Movie, 'id'> {}
