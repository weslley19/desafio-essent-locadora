"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { NewMovieForm, initValues, newMovieSchema } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { createMovie } from "@/app/(auth)/movies/action"
import { toast } from "react-toastify"
import { CreateMovie } from "@/types/movie"

export function useNewMovie() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [file, setFile] = useState<File | null>(null)

  const hookForm = useForm<NewMovieForm>({
    defaultValues: initValues,
    resolver: zodResolver(newMovieSchema)
  })

  const onSubmit: SubmitHandler<NewMovieForm> = async (data) => {
    const dataToSend: CreateMovie = {
      ...data,
      image: file as File
    }

    const formData = new FormData()
    formData.append('title', dataToSend.title)
    formData.append('releaseYear', dataToSend.releaseYear)
    formData.append('image', dataToSend.image as File)
    formData.append('synopsis', dataToSend.synopsis)
    formData.append('categoryId', dataToSend.categoryId)
    formData.append('rentalValue', dataToSend.rentalValue)
    formData.append('availableCopies', dataToSend.availableCopies.toString())
    formData.append('cast', JSON.stringify(dataToSend.cast))

    const response = await createMovie(formData)
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFile(file)
  }

  return {
    hookForm,
    onSubmit,
    openModal,
    handleOpenCloseModal,
    handleFileChange
  }
}
