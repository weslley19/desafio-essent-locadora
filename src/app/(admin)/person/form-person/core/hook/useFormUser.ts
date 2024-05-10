import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'

import { CreatePersonForm, createPersonSchema, initValues } from '../validation/schema'

export function useFormPerson() {
  const [requestEndpoint, setRequestEndpoint] = useState<boolean>(false)

  const hookForm = useForm<CreatePersonForm>({
    defaultValues: initValues,
    resolver: zodResolver(createPersonSchema)
  })

  const onSubmit: SubmitHandler<CreatePersonForm> = (data) => {
    setRequestEndpoint(true)
    try {
      console.log(data)
      toast.success('Pessoa criado com sucesso!')
    } catch (error: any) {
      toast.error('Erro ao criar pessoa! Tente novamente')
    } finally {
      setRequestEndpoint(false)
    }
  }

  return {
    hookForm,
    onSubmit,
    requestEndpoint
  }
}
