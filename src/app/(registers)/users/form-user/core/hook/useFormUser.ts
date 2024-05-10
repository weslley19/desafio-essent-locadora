import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify'

import { CreateUserForm, createUserSchema, initValues } from '../validation/schema'

export function useFormUser() {
  const [requestEndpoint, setRequestEndpoint] = useState<boolean>(false)

  const hookForm = useForm<CreateUserForm>({
    defaultValues: initValues,
    resolver: zodResolver(createUserSchema)
  })

  const onSubmit: SubmitHandler<CreateUserForm> = (data) => {
    setRequestEndpoint(true)
    try {
      console.log(data)
      toast.success('Usuário criado com sucesso!')
    } catch (error: any) {
      toast.error('Erro ao criar usuário! Tente novamente')
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
