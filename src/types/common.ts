export interface Pagination {
  page: number
  totalPage: number
  perPage: number
  total: number
}

export interface DefaultRequest<T> extends Pagination {
  message: string
  data: T[]
}
