"use client"

import { useState } from "react"

export function useUsers () {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenCloseModal = () => {
    setOpenModal(!openModal)
  }

  return {
    openModal,
    handleOpenCloseModal
  }
}
