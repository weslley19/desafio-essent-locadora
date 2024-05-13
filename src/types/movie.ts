import { Person } from "./person"

export interface Movie {
  id: number
  title: string
  releaseYear: string
  image?: string
  synopsis: string
  categoryId: string
  rentalValue: string
  availableCopies: number
  // cast: Person[]
  cast: string[]
  createdAt?: string
  updatedAt?: string
}

export interface CreateMovie extends Omit<Movie, 'id'> {}
