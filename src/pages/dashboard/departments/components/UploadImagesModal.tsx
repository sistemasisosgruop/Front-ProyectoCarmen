import { UseModalStore } from '@hooks/useModal'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import UploadImages from '@components/UploadImages'
import Modal from '@components/Modal'
import { API_URL } from '@utils/consts'

interface Props {
  modal: UseModalStore
  departmentId: string
}

function UploadImagesModal({ modal, departmentId }: Props) {
  const [files, setFiles] = useState<FileList | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async () => {
    const data = new FormData()

    if (files !== null) {
      for (let i = 0; i < files.length; i++) {
        data.append('image', files[i])
      }
    }

    await axios
      .post(`${API_URL}/rooms/${departmentId}/images`, data, {
        headers: {
          Authorization: window.sessionStorage.getItem('token')
        }
      })
      .then(() => {
        setIsLoading(true)
        modal.onClose()
        toast.success('Imágenes subidas con éxito')
      })
      .catch(error => {
        setIsLoading(true)
        modal.onClose()
        toast.error('Ha ocurrido un error!')
        throw new Error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent = (
    <div>
      <UploadImages setFiles={setFiles} />
    </div>
  )

  return (
    <Modal
      title="Subir imágenes del departamento"
      actionLabel="Actualizar"
      isOpen={modal.isOpen}
      disabled={isLoading}
      onClose={modal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  )
}

export default UploadImagesModal
