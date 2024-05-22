"use server"

import { server } from "@/service/api"
import { DefaultRequest } from "@/types/common"
import { CreateRental, Rental } from "@/types/rented"
import { AxiosResponse } from "axios"
import { revalidatePath } from "next/cache"

const endpoint = '/rented'

export async function getRented() {
  try {
    const response = await server.get<DefaultRequest<Rental[]>>(endpoint)
    if (response.status === 200) {
      return response.data.data
    }
  } catch (err) {
    return null
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
