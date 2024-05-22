import CarouselSpacing from "@/components/carousel"
import NewMovie from "./_components/new-movie/new-movie"
import { getMovies } from "./action"
import { useMovie } from "./core/hook/useMovie"
import { Movie } from "@/types/movie"

export default async function Movies () {
  const { handleFilterMoviesByCategory } = useMovie()
  const movies = await getMovies()
  const moviesByCategory = handleFilterMoviesByCategory(movies as Movie[])

  return (
    <>
      <NewMovie />

      <div className="mt-10" />

      <CarouselSpacing data={moviesByCategory} />
    </>
  )
}
