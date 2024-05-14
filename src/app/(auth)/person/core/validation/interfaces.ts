export enum PersonRole {
  CLIENT = 'Cliente',
  USER = 'Usuário',
  ACTOR = 'Ator',
  DIRECTOR = 'Diretor'
}

export interface PersonProps {
  name: string
  email: string
  role: PersonRole
}
