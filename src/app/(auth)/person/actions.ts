"use server"

import { serializeQueryParams } from "@/lib/utils"
import { server } from "@/service/api"
import { CreatePerson, Person } from "@/types/person"
import { AxiosResponse } from "axios"
import { revalidatePath } from "next/cache"

const endpoint = '/person'

export async function getPerson(params: object  = {}): Promise<AxiosResponse<Person[]>> {
  try {
    const queryParams = serializeQueryParams({...params})
    const response = await server.get(`${endpoint}?${queryParams}`)
    return response
  } catch (err) {
    throw new Error('Error')
  }
}

export async function createPerson(payload: CreatePerson) {
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
