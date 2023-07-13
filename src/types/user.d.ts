import { type BaseResponse } from './baseResponse'

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
}

export type UserResponse = BaseResponse<User>
