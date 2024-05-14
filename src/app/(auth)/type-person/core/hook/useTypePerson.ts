"use client"

import { useState } from "react"

export function useTypePerson () {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenCloseModal = () => {
    setOpenModal(!openModal)
  }

  return {
    openModal,
    handleOpenCloseModal
  }
}
