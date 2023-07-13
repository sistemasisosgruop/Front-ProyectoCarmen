import { type BaseResponse } from './baseResponse'

export interface Role {
  id: number
  name: string
  permissions: string[]
}

export type RoleResponse = BaseResponse<Role>
