import CarouselSpacing from "@/components/carousel"
import Banner from "./components/banner"
import Header from "./components/header"
import { useMovie } from "@/app/(auth)/movies/core/hook/useMovie"
import { getMovies } from "@/app/(auth)/movies/action"
import { Movie } from "@/types/movie"
import { useSite } from "./hook/useSite"

export default async function Site() {
  const { handleFilterMoviesByCategory } = useMovie()
  const movies = await getMovies()
  const moviesByCategory = handleFilterMoviesByCategory(movies as Movie[])

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      <Header />

      <Banner />

      <div className="pl-20 pb-20">
        <CarouselSpacing data={moviesByCategory} className="w-60" />
      </div>
    </div>
  )
}
