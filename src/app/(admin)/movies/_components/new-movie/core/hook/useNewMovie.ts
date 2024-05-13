"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { NewMovieForm, initValues, newMovieSchema } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { createMovie } from "@/app/(admin)/movies/action"
import { toast } from "react-toastify"

export function useNewMovie() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const hookForm = useForm<NewMovieForm>({
    defaultValues: initValues,
    resolver: zodResolver(newMovieSchema)
  })

  const onSubmit: SubmitHandler<NewMovieForm> = async (data) => {
    const response = await createMovie(data)
    if (response.status === 201) {
      toast.success('Filme cadastrado com sucesso')
      hookForm.reset()
    } else {
      toast.error(response?.message)
    }
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
