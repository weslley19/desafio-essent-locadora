import { Movie } from "./movie";
import { Person } from "./person";

export interface Rental {
  id: number
  renter: Person
  renterId: string
  movie: Movie
  movieId: string
  rentalDate: string
  returnDate: string
  returnDeadline: string
  lateFee: string
  totalAmount: string
  status: 'Regular' | 'Late' | 'Returned'
  createdAt?: string
  updatedAt?: string
}

export interface CreateRental extends Omit<Rental, 'id'> {}
