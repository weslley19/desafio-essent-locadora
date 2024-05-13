"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TypePersonForm, initValues, typePersonSchema } from "../validation/schema"
import { toast } from "react-toastify"
import { createTypePerson } from "../../../actions"

export function useFormTypePerson () {
  const hookForm = useForm<TypePersonForm>({
    defaultValues: initValues,
    resolver: zodResolver(typePersonSchema)
  })

  const onSubmit: SubmitHandler<TypePersonForm> = async (data) => {
    const response = await createTypePerson(data)
    if (response.status === 201) {
      toast.success('Tipo cadastrado com sucesso')
    } else {
      toast.error(response?.message)
    }
  }

  return {
    hookForm,
    onSubmit
  }
}
