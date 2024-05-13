"use client"

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'

import { CreateRentForm, createRentSchema, initValues } from '../validation/schema'
import { createRental } from '@/app/(admin)/rented/actions'

export function useFormRented() {
  const hookForm = useForm<CreateRentForm>({
    defaultValues: initValues,
    resolver: zodResolver(createRentSchema)
  })

  const onSubmit: SubmitHandler<CreateRentForm> = async (data) => {
    console.log(data)
    const response = await createRental(data as any)
    if (response.status === 201) {
      toast.success('Aluguel cadastrado com sucesso')
      hookForm.reset()
    } else {
      toast.error(response?.message)
    }
  }

  return {
    hookForm,
    onSubmit,
  }
}
