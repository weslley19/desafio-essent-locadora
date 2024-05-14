import CarouselSpacing from "@/components/shared/carousel/carousel"

import NewMovie from "./_components/new-movie/new-movie"
import { getMovies } from "./action"
import { useMovie } from "./core/hook/useMovie"

export default async function Movies () {
  const { handleFilterMoviesByCategory } = useMovie()
  const movies = await getMovies()
  const moviesByCategory = handleFilterMoviesByCategory(movies.data)

  return (
    <>
      <NewMovie />

      <CarouselSpacing data={moviesByCategory} />
    </>
  )
}
