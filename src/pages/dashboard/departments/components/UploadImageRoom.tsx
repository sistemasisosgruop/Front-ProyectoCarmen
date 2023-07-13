import { type ChangeEvent, useState } from 'react'

interface Props {
  setFiles: (files: File) => void
}

function UploadImageRoom({ setFiles }: Props) {
  const [image, setImage] = useState<string | null>(null)

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files

    if (file) {
      setImage(URL.createObjectURL(file[0]))
      setFiles(file[0])
    }
  }

  return (
    <article className="w-full">
      <label htmlFor="images" className="text-gray-600 text-sm mb-2">
        Agregar imagen de la habitación
      </label>
      <div>
        <input type="file" onChange={handleImageUpload} accept="image/*" className="" />
        <span className="text-gray-400 text-sm">*Se acepta un archivo con un tamaño máximo de 10MB</span>
      </div>
      <div className="w-[80%] mx-auto mt-4">
        {image !== null && (
          <img
            src={image}
            alt='image room'
            className="w-full h-full object-cover object-center rounded-xl"
          />
        )}
      </div>
    </article>
  )
}

export default UploadImageRoom
