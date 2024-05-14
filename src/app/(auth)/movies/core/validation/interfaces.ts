export interface CarouselListMovies {
  category: string
  movies: IMoviesCategory[]
}

interface IMoviesCategory {
  id: number
  image: string
}

export enum ECarouselListMovies {
  action = 'Ação',
  adventure = 'Aventura',
  animation = 'Animação',
  comedy = 'Comédia',
  crime = 'Crime',
}
