import { Button } from "@/components/ui/button"
import { Movie } from "@/types/movie"
import Image from "next/image"

interface ModalDetailsMovieProps {
  movie: Movie
}

export default function ModalDetailsMovie ({ movie }: ModalDetailsMovieProps) {
  return (
    <>
      <div>
        <Image
          src={`/${movie.image}`}
          alt={movie.title as string}
          width={500}
          height={500}
        />
      </div>

      <Button>Pré-reservar</Button>
    </>
  )
}
