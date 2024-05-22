import { Movie } from "@/types/movie";
import { CarouselListMovies } from "../validation/interfaces";

export function useMovie() {
  const handleFilterMoviesByCategory = (moviesByCategory: Movie[]): CarouselListMovies[] => {
    let moviesGroupedByCategory: CarouselListMovies[] = []

    moviesByCategory?.map((movie) => {
      const category = movie?.category?.name
      const index = moviesGroupedByCategory.findIndex((item) => item.category === category)

      if (index === -1) {
        moviesGroupedByCategory.push({
          category: category as string,
          movies: [{
            id: movie.id,
            image: movie.image as string
          }]
        })
      } else {
        moviesGroupedByCategory[index].movies.push({
          id: movie.id,
          image: movie.image as string
        })
      }
    })

    return moviesGroupedByCategory
  }

  return {
    handleFilterMoviesByCategory
  }
}
