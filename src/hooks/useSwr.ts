import { type AxiosInstance } from 'axios'
import useSWR from 'swr'

export function useSwr<Data = any, Error = any> (
  url: string | null,
  api: AxiosInstance,
  params?: any,
  revalidateIfStale?: boolean,
  revalidateOnFocus?: boolean,
  revalidateOnReconnect?: boolean,
  shouldRetryOnError?: boolean,
  refreshInterval?: number
) {
  const { data, error, isValidating, mutate, isLoading } = useSWR<Data, Error>(
    url,
    async (url) => {
      try {
        const response = await api.get(url, params)

        return response.data
      } catch (error: any) {
        if (error.response.status === 404) {
          return error.response.data
        }
      }

      return {}
    },
    {
      revalidateIfStale: revalidateIfStale ?? true,
      revalidateOnFocus: revalidateOnFocus ?? false,
      revalidateOnReconnect: revalidateOnReconnect ?? false,
      shouldRetryOnError: shouldRetryOnError ?? false,
      refreshInterval: refreshInterval ?? undefined
    }
  )

  const currentKey = url

  return { data, error, isValidating, mutate, currentKey, isLoading }
}
