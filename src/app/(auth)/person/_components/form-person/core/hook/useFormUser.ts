"use client"

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'

import { CreatePersonForm, createPersonSchema, initValues } from '../validation/schema'
import { createPerson } from '@/app/(auth)/person/actions'
import { getTypesPerson } from '@/app/(auth)/type-person/actions'

export function useFormPerson() {
  const hookForm = useForm<CreatePersonForm>({
    defaultValues: initValues,
    resolver: zodResolver(createPersonSchema)
  })

  const onSubmit: SubmitHandler<CreatePersonForm> = async (data) => {
    const dataToSend: CreatePersonForm = {
      ...data,
      cpf: data.cpf.replace(/\D/g, '')
    }
    const response = await createPerson(dataToSend)
    if (response.status === 201) {
      toast.success('Pessoa cadastrada com sucesso')
      hookForm.reset()
    } else {
      toast.error(response?.message)
    }
  }

  const handleGetTypesPerson = async () => {
    const response = await getTypesPerson()
    return response.data
  }

  return {
    hookForm,
    onSubmit,
    handleGetTypesPerson
  }
}
