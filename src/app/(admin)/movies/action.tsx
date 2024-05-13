"use server"

import { server } from "@/service/api"
import { Movie } from "@/types/movie"
import { AxiosResponse } from "axios"
import { writeFile } from "fs/promises"
import { revalidatePath } from "next/cache"
import { join } from "path"
import { toast } from "react-toastify"

const endpoint = '/movies'

export async function getMovies(): Promise<AxiosResponse<Movie[]>> {
  try {
    const response = await server.get(endpoint)
    return response
  } catch (err) {
    throw new Error('Error')
  }
}

export async function createMovie(payload: FormData) {
  try {
    const fileName = payload.get('image') as File
    const dataToSend = {
      title: payload.get('title'),
      releaseYear: payload.get('releaseYear'),
      image: fileName.name,
      synopsis: payload.get('synopsis'),
      categoryId: payload.get('categoryId'),
      rentalValue: payload.get('rentalValue'),
      availableCopies: payload.get('availableCopies'),
      cast: payload.get('cast')
    }

    const response = await server.post(endpoint, dataToSend)

    const file: File | null = payload.get('image') as File
    if (file) {
      try {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const timestamp = new Date().getTime()
        const destination = join(process.cwd(), 'public', 'uploads')
        const path = join(destination, `${timestamp}-${file.name}`);
        await writeFile(path, buffer)
      } catch (err) {
        toast.warning('Erro ao salvar imagem do filme! Tente novamente')
      }
    }

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
