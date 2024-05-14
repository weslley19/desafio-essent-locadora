"use client"

import { useState } from "react"

export function useCategory () {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenCloseModal = () => {
    setOpenModal(!openModal)
  }

  return {
    openModal,
    handleOpenCloseModal
  }
}
