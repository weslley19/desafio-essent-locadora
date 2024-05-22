"use client"

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'

import { CreateRentForm, createRentSchema, initValues } from '../validation/schema'
import { createRental } from '@/app/(auth)/rented/actions'
import { Movie } from '@/types/movie'

export function useFormRented() {
  const hookForm = useForm<CreateRentForm>({
    defaultValues: initValues,
    resolver: zodResolver(createRentSchema)
  })

  const onSubmit: SubmitHandler<CreateRentForm> = async (data) => {
    const response = await createRental(data as any)
    if (response.status === 201) {
      toast.success('Aluguel cadastrado com sucesso')
      hookForm.reset()
    } else {
      toast.error(response?.message)
    }
  }

  const handleCalculateTotal = () => {
    if (hookForm.watch('rentalDate')) {
      const rentalDate = new Date(hookForm.watch('rentalDate')).getTime()
      const returnDate = new Date(hookForm.watch('returnDate')).getTime()
      const days = Math.floor((returnDate - rentalDate) / (1000 * 60 * 60 * 24))
      const valueMovie = hookForm.watch('valueMovie')
      const totalAmount = days * Number(valueMovie)
      hookForm.setValue('totalAmount', totalAmount.toString())
    }
  }

  const handleGetValueMovie = (movie: Movie) => {
    hookForm.setValue('valueMovie', movie.rentalValue.toString())
  }

  return {
    hookForm,
    onSubmit,
    handleCalculateTotal,
    handleGetValueMovie
  }
}
