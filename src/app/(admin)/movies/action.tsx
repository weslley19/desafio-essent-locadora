"use server"

import { server } from "@/service/api"
import { Movie, CreateMovie } from "@/types/movie"
import { AxiosResponse } from "axios"
import { revalidatePath } from "next/cache"

const endpoint = '/movies'

export async function getMovies(): Promise<AxiosResponse<Movie[]>> {
  try {
    const response = await server.get(endpoint)
    return response
  } catch (err) {
    throw new Error('Error')
  }
}

export async function createMovie(payload: CreateMovie) {
  try {
    const response = await server.post(endpoint, payload)
    revalidatePath(endpoint)
    return {
      data: response.data,
      status: response.status
    }
  } catch (err: any) {
    return {
      message: err?.response?.data?.message,
      status: err?.response?.status
    }
  }
}
