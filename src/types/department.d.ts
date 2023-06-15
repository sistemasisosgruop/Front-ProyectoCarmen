interface Detail {
  imagesUrl: File[]
  amenities: string[]
  notIncluded: string[]
  services: string[]
}

export interface Department {
  room_type: string
  description: string
  address: string
  price: number
  check_in: string
  check_out: string
  num_bathrooms: number
  num_beds: number
  extras: string[]
  details: Detail
  num_room: {
    type_room: string
    num_bed: number
    type_bed: string
    type_bed_2: string
    images_url: File[]
  }
}
