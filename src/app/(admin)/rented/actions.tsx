"use server"

import { server } from "@/service/api"
import { CreateRental, Rental } from "@/types/rented"
import { AxiosResponse } from "axios"
import { revalidatePath } from "next/cache"

const endpoint = '/rented'

export async function getRented(): Promise<AxiosResponse<Rental[]>> {
  try {
    const response = await server.get(endpoint)
    return response
  } catch (err) {
    throw new Error('Error')
  }
}

export async function createRental(payload: CreateRental) {
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
