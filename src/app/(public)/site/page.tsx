import CarouselSpacing from "@/components/shared/carousel/carousel"
import Banner from "./components/banner"
import Header from "./components/header"
import { movies } from "@/app/(admin)/movies/data"

const Site = (): JSX.Element => {
  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      <Header />

      <Banner />

      <div className="pl-20 pb-20">
        <CarouselSpacing data={movies} className="w-60" />
      </div>
    </div>
  )
}

export default Site
