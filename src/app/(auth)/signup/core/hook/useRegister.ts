"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterForm, initValues, registerSchema } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export function useRegister() {
  const [requestEndpoint, setRequestEndpoint] = useState<boolean>(false)

  const hookForm = useForm<RegisterForm>({
    defaultValues: initValues,
    resolver: zodResolver(registerSchema)
  })

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    console.log(data)
  }

  return {
    hookForm,
    onSubmit,
    requestEndpoint
  }
}
