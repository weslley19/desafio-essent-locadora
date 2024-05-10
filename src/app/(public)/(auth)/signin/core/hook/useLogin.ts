"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { LoginForm, initValues, loginSchema } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export function useLogin() {
  const [requestEndpoint, setRequestEndpoint] = useState<boolean>(false)

  const hookForm = useForm<LoginForm>({
    defaultValues: initValues,
    resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data)
  }

  return {
    hookForm,
    onSubmit,
    requestEndpoint
  }
}
