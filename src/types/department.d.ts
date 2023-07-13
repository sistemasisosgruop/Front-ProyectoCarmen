import { type BaseResponse } from './baseResponse'

export interface DepartmentRoom {
  typeRoom: string
  numBed: number
  typeBed: string[]
  numBaths: number
  Images: string[]
}

export interface DepartmentDetail {
  amenities: string[]
  notIncluded: string[]
  services: string[]
}

export interface EntityImage {
  id: string | number
  imageId: string
  departmentId: string
  roomId: string | number | null
  tourId: string | number | null
}

export interface RoomImage {
  imageUrl: string
  order: number
  EntityImages: EntityImage
}

export interface Department {
  id: string
  departmentType: string
  description: string
  address: string
  price: number
  checkIn: Date
  checkOut: Date
  numBathrooms: number
  numBeds: number
  numRooms: number
  extras: string[]
  details: DepartmentDetail
  DepartmentRooms: DepartmentRoom[]
  Images: RoomImage[]
}

export type DepartmentResponse = BaseResponse<Department>
