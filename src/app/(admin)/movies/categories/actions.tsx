"use server"

import { server } from "@/service/api"
import { Category, CreateCategory } from "@/types/categories"
import { AxiosResponse } from "axios"
import { revalidatePath } from "next/cache"

const endpoint = '/categories'

export async function getCategories(): Promise<AxiosResponse<Category[]>> {
  try {
    const response = await server.get(endpoint)
    return response
  } catch (err) {
    throw new Error('Error')
  }
}

export async function createCategory(payload: CreateCategory) {
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
