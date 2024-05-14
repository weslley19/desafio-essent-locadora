import { z } from "zod";

export const createRentSchema = z.object({
  renterId: z.string().min(1, 'Mínimo de 1 caracteres'),
  movieId: z.string().min(1, 'Mínimo de 1 caracteres'),
  rentalDate: z.string().min(1, 'Mínimo de 1 caracteres'),
  returnDate: z.string().min(1, 'Mínimo de 1 caracteres'),
  returnDeadline: z.string(),
  lateFee: z.string(),
  totalAmount: z.string().min(1, 'Mínimo de 1 caracteres'),
  status: z.string().min(1, 'Mínimo de 1 caracteres')
})

export type CreateRentForm = z.infer<typeof createRentSchema>

export const initValues = {
  renterId: '',
  movieId: '',
  rentalDate: '',
  returnDate: '',
  returnDeadline: '',
  lateFee: '0',
  totalAmount: '',
  status: ''
}
