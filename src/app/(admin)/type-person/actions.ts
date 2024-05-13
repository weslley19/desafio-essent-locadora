"use server"

import { server } from "@/service/api"
import { CreateTypesPerson, TypesPerson } from "@/types/types-person"
import { AxiosResponse } from "axios"
import { revalidatePath } from "next/cache"

const endpoint = '/types-person'

export async function getTypesPerson(): Promise<AxiosResponse<TypesPerson[]>> {
  try {
    const response = await server.get(endpoint)
    return response
  } catch (err) {
    throw new Error('Error')
  }
}

export async function createTypePerson(payload: CreateTypesPerson) {
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
