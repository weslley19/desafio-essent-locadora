export interface CarouselListMovies {
  category: ECarouselListMovies
  movies: IMoviesCategory[]
}

interface IMoviesCategory {
  id: number
  url: string
}

export enum ECarouselListMovies {
  action = 'Ação',
  adventure = 'Aventura',
  animation = 'Animação',
  comedy = 'Comédia',
  crime = 'Crime',
}
