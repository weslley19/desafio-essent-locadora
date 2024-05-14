"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { ReservedForm, initValues, reservedSchema } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"

export function useReserved () {
  const hookForm = useForm<ReservedForm>({
    defaultValues: initValues,
    resolver: zodResolver(reservedSchema)
  })

  const onSubmit: SubmitHandler<ReservedForm> = (data) => {
    console.log(data)
  }

  return {
    hookForm,
    onSubmit
  }
}
