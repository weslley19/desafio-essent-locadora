"use client"

import { Movie } from "@/types/movie"
import { useEffect, useState } from "react"

export function useSite() {
  const [openModal, setOpenModal] = useState<{ open: boolean, movie: Movie }>({
    open: false,
    movie: {} as Movie
  })
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const handleSelecMovie = (movie: any) => {
    setOpenModal({
      open: !openModal.open,
      movie
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    openModal,
    handleSelecMovie,
    isScrolled
  }
}
