"use server"

import { serializeQueryParams } from "@/lib/utils"
import { server } from "@/service/api"
import { DefaultRequest } from "@/types/common"
import { CreatePerson, Person } from "@/types/person"
import { revalidatePath } from "next/cache"

const endpoint = '/person'

export async function getPerson(params: object = {}) {
  try {
    const queryParams = serializeQueryParams(params)
    const response = await server.get<DefaultRequest<Person[]>>(`${endpoint}?${queryParams}`)
    if (response.status === 200) {
      return response.data.data
    }
  } catch (err) {
    return null
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
