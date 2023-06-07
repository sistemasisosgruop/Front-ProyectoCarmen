import { useState } from 'react'
import Types from 'prop-types'

const UploadImages = ({ setImages }) => {
  const [imagesSelected, setImagesSelected] = useState([])

  const handleImageUpload = event => {
    const files = event.target.files
    const imagesArray = Array.from(files).slice(1, 10)

    setImagesSelected(imagesArray.map(image => URL.createObjectURL(image)))
    setImages(files)
  }

  return (
    <article className="w-full">
      <label htmlFor="images" className="text-gray-600 text-sm mb-2">
        Agregar imágenes
      </label>
      <div>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          accept="image/*"
          className=""
        />
        <span className="text-gray-400 text-sm">
          *Se acepta un máximo de 10 archivos con un tamaño máximo de 10MB
        </span>
        <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3">
          {imagesSelected.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`image room ${index + 1}`}
              className="w-full h-full object-cover object-center rounded-xl"
            />
          ))}
        </div>
      </div>
    </article>
  )
}

UploadImages.propTypes = {
  setFiles: Types.func
}

export default UploadImages
