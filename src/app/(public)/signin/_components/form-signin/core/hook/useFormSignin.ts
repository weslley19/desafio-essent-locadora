"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SigninForm, initValues, loginSignin } from "../validation/schema"
import { login } from "../../actions"

export function useFormSignin() {
  const hookForm = useForm<SigninForm>({
    defaultValues: initValues,
    resolver: zodResolver(loginSignin)
  })

  const onSubmit: SubmitHandler<SigninForm> = async (data) => {
    await login(data)
  }

  return {
    hookForm,
    onSubmit
  }
}
