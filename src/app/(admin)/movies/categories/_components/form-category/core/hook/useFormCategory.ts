"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { CategoryForm, categorySchema, initValues } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { createCategory } from "../../../../actions"
import { toast } from "react-toastify"

export function useFormCategory () {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const hookForm = useForm<CategoryForm>({
    defaultValues: initValues,
    resolver: zodResolver(categorySchema)
  })

  const onSubmit: SubmitHandler<CategoryForm> = async (data) => {
    const response = await createCategory(data)
    if (response.status === 201) {
      toast.success('Categoria cadastrada com sucesso')
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
