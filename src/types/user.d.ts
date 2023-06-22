export interface UserResponse {
  count: number
  totalPages: number
  currentPage: number
  results: User[]
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  genre: string
  phoneNumber: string
  countryCode: number
  documentType: null | string
  documentNumber: number
  birthday: Date
  student: boolean
  roleId: number
  createdAt: Date
  updatedAt: Date
}
