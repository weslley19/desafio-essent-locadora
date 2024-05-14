import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselListMovies } from "@/app/(auth)/movies/core/validation/interfaces"
import Image from "next/image"

interface CarouselSpacingProps {
  data: CarouselListMovies[]
  className?: string
}

const CarouselSpacing = ({ data, className = '' }: CarouselSpacingProps) => {
  return (
    <>
      {data.length === 0 && (
        <h1 className="text-center mt-10">Nenhum filme cadastrado</h1>
      )}
      {data.map((item, index) => (
        <Carousel key={index} className="w-full mb-10 last:mb-0">
          <h1 className="p-1 font-bold text-lg mb-3">{item.category}</h1>
          <CarouselContent className="-ml-1">
            {item.movies.map((i) => (
              <CarouselItem key={i.id} className="pl-1 md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <Card className={`p-0 ${className}`}>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={`/uploads/${i.image}`}
                        // src={`${i.image}`}
                        alt={i.id.toString()}
                        width={150}
                        height={225}
                        className="rounded-lg w-full transition-all ease-in	hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 translate-y-0" />
          <CarouselNext className="right-4 translate-y-0" />
        </Carousel>
      ))}
    </>
  )
}

export default CarouselSpacing
