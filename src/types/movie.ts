import { MovieCategory } from "@prisma/client"
import { Person } from "./person"

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
  cast: string[]
  createdAt?: string
  updatedAt?: string
}

export interface CreateMovie extends Omit<Movie, 'id'> {}
