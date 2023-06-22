export interface Tour {
  id: string
  tourName: string
  tourDescription: string
  extras: string[]
  location: string
  duration: string
  difficulty: string
  languages: string[]
  numberOfPeople: string
  ages: string
  toursDetails: ToursDetails
  toursInfo: ToursInfo
  tourImages: TourImages
}

export interface TourImages {
  id: null
  tourID: null
  imageURL: null
  order: null
}

export interface ToursDetails {
  whatIsIncluded: string
  whatIsNotIncluded: string
  itinerary: string[]
  departureDetails: string
  returnDetails: string
  accessibility: string
}

export interface ToursInfo {
  whatToDo: string
  goodChoiseFor: string
  cancellationPolicy: string
  pricePerPerson: number
  availableDates: string[]
  schedule: string
}
