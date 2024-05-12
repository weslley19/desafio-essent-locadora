import axios from 'axios'

export const server = axios.create({
  baseURL: `http://localhost:${process.env.PORT}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
})

