"use client"

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'
import { CreatePersonForm, createPersonSchema, initValues } from '../validation/schema'
import { createPerson } from '@/app/(auth)/person/actions'
import { dateUsMask } from '@/lib/utils'

export function useFormPerson() {
  const hookForm = useForm<CreatePersonForm>({
    defaultValues: initValues,
    resolver: zodResolver(createPersonSchema)
  })

  const onSubmit: SubmitHandler<CreatePersonForm> = async (data) => {
    const dataToSend: CreatePersonForm = {
      ...data,
      cpf: data.cpf.replace(/\D/g, ''),
      birthday: dateUsMask(data.birthday)
    }
    const response = await createPerson(dataToSend)
    if (response.status === 201) {
      toast.success('Pessoa cadastrada com sucesso')
      hookForm.reset()
    } else {
      toast.error(response?.message)
    }
  }

  return {
    hookForm,
    onSubmit
  }
}
