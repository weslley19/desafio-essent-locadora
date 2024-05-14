import { useState } from "react"

export function useRented() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenCloseModal = () => {
    setOpenModal(!openModal)
  }

  return {
    openModal,
    handleOpenCloseModal
  }
}
