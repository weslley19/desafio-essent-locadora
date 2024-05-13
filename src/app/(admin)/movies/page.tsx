import CarouselSpacing from "@/components/shared/carousel/carousel"

import { movies } from "./data"
import NewMovie from "./_components/new-movie/new-movie"

const Movies = (): JSX.Element => {
  return (
    <>
      <NewMovie />

      <CarouselSpacing data={movies} />
    </>
  )
}

export default Movies
