import { SubmitHandler, useForm } from "react-hook-form"
import { RentedForm, initValues, rentedSchema } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export function useRented() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const hookForm = useForm<RentedForm>({
    defaultValues: initValues,
    resolver: zodResolver(rentedSchema)
  })

  const onSubmit: SubmitHandler<RentedForm> = (data) => {
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
