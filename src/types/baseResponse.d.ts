export interface BaseResponse<T> {
  count: number
  totalPages: number
  currentPage: number
  results: T[]
}
