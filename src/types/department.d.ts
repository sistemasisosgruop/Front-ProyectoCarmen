export interface DepartmentResponse {
  count: number
  totalPages: number
  results: Department[]
}

export interface Department {
  id: string
  roomType: string
  description: string
  address: string
  price: number
  checkIn: Date
  checkOut: Date
  numBathrooms: number
  numBeds: number
  extras: string[]
  roomDetails: RoomDetails
  roomDetails2: RoomDetails2
  roomImages: any[]
}

export interface RoomDetails {
  typeRoom: string
  numBed: number
  typeBed: string
  typeBed2: string
}

export interface RoomDetails2 {
  amenities: string[]
  notIncluded: string[]
  services: string[]
}
