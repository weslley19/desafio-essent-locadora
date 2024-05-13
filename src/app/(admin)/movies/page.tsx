import CarouselSpacing from "@/components/shared/carousel/carousel"

import { movies } from "./data"
import NewMovie from "./_components/new-movie/new-movie"

export default async function Movies () {
  return (
    <>
      <NewMovie />

      <CarouselSpacing data={movies} />
    </>
  )
}
