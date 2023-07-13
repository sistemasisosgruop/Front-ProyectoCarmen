import { useState } from 'react'
import { useFormatDay } from '@hooks/useFormatDay'
import { useModal } from '@hooks/useModal'
import Button from '@components/Button'
import UploadImagesModal from '@dashboard/departments/components/UploadImagesModal'
import DepartmentDetails from './DepartmentDetails'
import DepartmentRoomDetails from './DepartmentRoomDetails'
import { BiChevronDown, BiEdit, BiTrash } from 'react-icons/bi'

import { type Department } from 'types/department'

interface Props {
  department: Department
  index: number
}

function DepartmentItem({ department, index }: Props) {
  const [roomDetails, setRoomDetails] = useState<number | null>(null)
  const [departmentDetails, setDepartmentDetails] = useState<number | null>(null)
  const { date: checkIn } = useFormatDay(department.checkIn)
  const { date: checkOut } = useFormatDay(department.checkOut)
  const uploadImagesModal = useModal()

  const handleRoomDetails = (index: number) => {
    setRoomDetails(prevState => (prevState === index ? null : index))
  }

  const handleDepartmentDetails = (index: number) => {
    setDepartmentDetails(prevState => (prevState === index ? null : index))
  }

  return (
    <>
      <tr className="text-sm">
        <td>{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2">
          {department.departmentType}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {department.description}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {department.address}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          S/. {department.price}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {checkIn} - {checkOut}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {department.numBathrooms}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {department.numBeds}
        </td>
        <td className="whitespace-nowrap px-4 py-2">

          <div className="flex justify-center items-center gap-4">
            <span>{department.DepartmentRooms.length}</span>
            <button type="button" onClick={() => handleRoomDetails(index)} className="p-1 text-dark">
              <BiChevronDown size={24} />
            </button>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {department.extras?.join(', ') + '.'}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <button type="button" onClick={() => handleDepartmentDetails(index)} className="p-1 text-dark">
            <BiChevronDown size={24} />
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-2">

          {department.Images.length === 0 && (
            <Button text="Subir imágenes" onClick={uploadImagesModal.onOpen} />
          )}
          {department.Images.length > 0 && (
            <article className="flex justify-center items-center gap-2">
              <button type="button" className="p-1 text-dark">
                <BiEdit size={18} />
              </button>
              <button type="button" className="p-1 text-dark">
                <BiTrash size={18} />
              </button>
            </article>
          )}
        </td>
      </tr>
      {roomDetails === index && (
        <tr>
          <td colSpan={12}>
            <DepartmentRoomDetails department={department} />
          </td>
        </tr>
      )}
      {departmentDetails === index && (
        <tr>
          <td colSpan={12}>
            <DepartmentDetails department={department} />
          </td>
        </tr>
      )}

      {/* Edit department */}
      {/* isOpenModal && (
        <Modal title="Editar departamento" closeModal={closeModal}>
          <EditForm initialValue={room} />
        </Modal>
      ) */}

      {/* Upload images */}
      <UploadImagesModal modal={uploadImagesModal} departmentId={department.id} />
    </>
  )
}

export default DepartmentItem
