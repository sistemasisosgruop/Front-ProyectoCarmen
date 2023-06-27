import { BaseResponse } from './baseResponse'

export interface Coupon {
  id: string
  couponCode: string
  discount: number
  roomID: string
  tourID: null | string
  createdAt: Date
  updatedAt: Date
}

export type CouponResponse = BaseResponse<Coupon>
