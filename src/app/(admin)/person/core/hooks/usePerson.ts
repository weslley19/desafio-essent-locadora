"use client"

import { useState } from "react"

export function usePerson () {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenCloseModal = () => {
    setOpenModal(!openModal)
  }

  return {
    openModal,
    handleOpenCloseModal
  }
}
