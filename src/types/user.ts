export interface User {
  id: string,
  name: string,
  username: string
  password: string
  email: string
  image: string
}

export interface UserLogin {
  username: string
  password: string
}
