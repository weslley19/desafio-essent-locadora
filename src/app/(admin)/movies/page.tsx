"use client"

import CarouselSpacing from "@/components/shared/carousel/carousel"
import Modal from "@/components/shared/modals/modal"
import { useNewMovie } from "./new-movie/core/hook/useNewMovie"
import NewMovie from "./new-movie/new-movie"

import { movies } from "./data"

const Movies = (): JSX.Element => {
  const { openModal, handleOpenCloseModal } = useNewMovie()

  return (
    <>
      <Modal
        title="Novo filme"
        labelButton="Adicionar filme"
        open={openModal}
        onClose={handleOpenCloseModal}
      >
        <NewMovie />
      </Modal>

      <CarouselSpacing data={movies} />
    </>
  )
}

export default Movies
