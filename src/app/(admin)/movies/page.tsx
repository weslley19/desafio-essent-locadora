import CarouselSpacing from "@/components/shared/carousel/carousel"
import { ECarouselListMovies, CarouselListMovies } from "./core/validation/interfaces"
import { movies } from "./data"

const Movies = (): JSX.Element => {
  return (
    <>
      <CarouselSpacing data={movies} />
    </>
  )
}

export default Movies
