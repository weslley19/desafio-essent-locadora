"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { NewMovieForm, initValues, newMovieSchema } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export function useNewMovie() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const hookForm = useForm<NewMovieForm>({
    defaultValues: initValues,
    resolver: zodResolver(newMovieSchema)
  })

  const onSubmit: SubmitHandler<NewMovieForm> = (data) => {
    console.log(data)
  }

  const handleOpenCloseModal = () => {
    setOpenModal(!openModal)
  }

  return {
    hookForm,
    onSubmit,
    openModal,
    handleOpenCloseModal
  }
}
