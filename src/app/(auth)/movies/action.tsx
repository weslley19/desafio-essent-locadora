"use server"

import { server } from "@/service/api"
import { DefaultRequest } from "@/types/common"
import { Movie } from "@/types/movie"
import { AxiosResponse } from "axios"
import { writeFile } from "fs/promises"
import { revalidatePath } from "next/cache"
import { join } from "path"
import { toast } from "react-toastify"

const endpoint = '/movies'

export async function getMovies() {
  try {
    const response = await server.get<DefaultRequest<Movie[]>>(endpoint)
    if (response.status === 200) {
      return response.data.data
    }
  } catch (err) {
    return null
  }
}

export async function createMovie(payload: FormData) {
  try {
    const file = payload.get('image') as File
    const timestamp = new Date().getTime()
    const filename = `${timestamp}-${file.name}`

    const dataToSend = {
      title: payload.get('title'),
      releaseYear: payload.get('releaseYear'),
      image: filename,
      synopsis: payload.get('synopsis'),
      categoryId: payload.get('categoryId'),
      rentalValue: payload.get('rentalValue'),
      availableCopies: payload.get('availableCopies'),
      cast: payload.get('cast'),
      directorId: payload.get('directorId'),
    }

    const response = await server.post(endpoint, dataToSend)

    if (file) {
      try {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const destination = join(process.cwd(), 'public')
        const path = join(destination, filename);
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
