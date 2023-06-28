# Departmets information and structure

```json
{
  "roomType": "Deluxe Suite",
  "description": "Spacious and luxurious suite with a stunning view of the city.",
  "address": "123 Main Street, Cityville",
  "price": 200,
  "checkIn": "2023-05-15T00:00:00.000Z",
  "checkOut": "2023-05-20T00:00:00.000Z",
  "numBathrooms": 2,
  "numBeds": 1,
  "numRooms": 1,
  "extras": ["Breakfast included", "Free Wi-Fi", "Gym access"],
  "details": {
    "included": ["Swimming pool", "Restaurant", "Room service"],
    "notIncluded": ["Pets not allowed", "Smoking not allowed"],
    "services": ["24/7 concierge", "Laundry service"]
  },
  "rooms": [
    {
      "typeRoom": "Deluxe Suite",
      "numBeds": 2,
      "typeBed": ["King bed", "Sofa bed"],
      "bathroomIncluded": true,
      "numBathrooms": 1,
      "image": "https://bucket.aws.photo"
    }
  ],
  "images": [
    {
      "id": "de04bb03-49b2-4ae5-9150-7ac4873e23b5",
      "imageUrl": "https://bucket-carmen-travel.s3.amazonaws.com/public/rooms/images/image-0543d4ca-1a5c-4d36-8653-d0431729044b-5.png"
    },
    {
      "id": "a088f1e4-b80d-47cc-aefe-53ee042e0f6a",
      "imageUrl": "https://bucket-carmen-travel.s3.amazonaws.com/public/rooms/images/image-0543d4ca-1a5c-4d36-8653-d0431729044b-2.png"
    }
  ]
}
```

```json
{
  "id": "0543d4ca-1a5c-4d36-8653-d0431729044b",
  "room_type": "Standard Room",
  "description": "Cozy and affordable room for a comfortable stay.",
  "address": "456 Elm Street, Townsville",
  "price": 100,
  "check_in": "2023-06-15T05:31:02.162Z",
  "check_out": "2023-06-15T05:31:02.162Z",
  "num_bathrooms": 1,
  "num_beds": 1,
  "extras": ["TV with cable channels", "Air conditioning", "Mini fridge"],
  "Room_Details": {
    "type_room": "Deluxe Suite",
    "num_bed": 1,
    "type_bed": "King Bed",
    "type_bed_2": "Sofa Bed"
  },
  "Room_Details_2": {
    "amenities": ["Swimming pool", "Restaurant", "Room service"],
    "not_included": ["Pets not allowed", "Smoking not allowed"],
    "services": ["24/7 concierge", "Laundry service"]
  },
  "Room_Images": [
    {
      "id": "de04bb03-49b2-4ae5-9150-7ac4873e23b5",
      "image_url": "https://bucket-carmen-travel.s3.amazonaws.com/public/rooms/images/image-0543d4ca-1a5c-4d36-8653-d0431729044b-5.png",
      "order": 5
    },
    {
      "id": "a088f1e4-b80d-47cc-aefe-53ee042e0f6a",
      "image_url": "https://bucket-carmen-travel.s3.amazonaws.com/public/rooms/images/image-0543d4ca-1a5c-4d36-8653-d0431729044b-2.png",
      "order": 2
    },
    {
      "id": "16e0601a-752f-48db-b605-fc2c8bbb1b4b",
      "image_url": "https://bucket-carmen-travel.s3.amazonaws.com/public/rooms/images/image-0543d4ca-1a5c-4d36-8653-d0431729044b-3.png",
      "order": 3
    },
    {
      "id": "cfd435aa-6419-4718-b344-c206646e307c",
      "image_url": "https://bucket-carmen-travel.s3.amazonaws.com/public/rooms/images/image-0543d4ca-1a5c-4d36-8653-d0431729044b-1.png",
      "order": 1
    },
    {
      "id": "ac3fd940-0734-40a8-a9f5-b135d0118bcf",
      "image_url": "https://bucket-carmen-travel.s3.amazonaws.com/public/rooms/images/image-0543d4ca-1a5c-4d36-8653-d0431729044b-4.png",
      "order": 4
    }
  ]
}
```
