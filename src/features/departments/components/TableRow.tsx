import { useState } from 'react'
import { useFormatDay } from '@hooks/useFormatDay'
import Types from 'prop-types'
import { BiChevronDown, BiEdit, BiTrash } from 'react-icons/bi'
import Modal from '@components/Modal'
import EditForm from './EditForm'
import { useModal } from '@hooks/useModal'

const TableRow = ({ room, index }) => {
  const [bedDetails, setBedDetails] = useState(null)
  const [roomDetails, setRoomDetails] = useState(null)
  const { isOpenModal, openModal, closeModal } = useModal()
  const { date: checkIn } = useFormatDay(room.check_in)
  const { date: checkOut } = useFormatDay(room.check_out)

  const handleBedDetails = index => {
    setBedDetails(prevState => (prevState === index ? null : index))
  }

  const handleRoomDetails = index => {
    setRoomDetails(prevState => (prevState === index ? null : index))
  }

  return (
    <>
      <tr className="text-sm">
        <td>{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2">{room.room_type}</td>
        <td className="whitespace-nowrap px-4 py-2">{room.description}</td>
        <td className="whitespace-nowrap px-4 py-2">{room.address}</td>
        <td className="whitespace-nowrap px-4 py-2">S/. {room.price}</td>
        <td className="whitespace-nowrap px-4 py-2">
          {checkIn} - {checkOut}
        </td>
        <td className="whitespace-nowrap px-4 py-2">{room.num_bathrooms}</td>
        <td className="whitespace-nowrap px-4 py-2">{room.num_beds}</td>
        <td className="whitespace-nowrap px-4 py-2">
          <div className="flex justify-center items-center gap-4">
            <span>{room.num_beds}</span>
            <button type="button" onClick={() => handleBedDetails(index)} className="p-1 text-dark">
              <BiChevronDown size={24} />
            </button>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-2">{room.extras?.join(', ') + '.'}</td>
        <td className="whitespace-nowrap px-4 py-2">
          <button type="button" onClick={() => handleRoomDetails(index)} className="p-1 text-dark">
            <BiChevronDown size={24} />
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <article className="flex justify-center items-center gap-2">
            <button type="button" onClick={openModal} className="p-1 text-dark">
              <BiEdit size={18} />
            </button>
            <button type="button" className="p-1 text-dark">
              <BiTrash size={18} />
            </button>
          </article>
        </td>
      </tr>
      {bedDetails === index && (
        <tr>
          <td colSpan={12}>
            <table className="w-full table-fixed">
              <thead className="bg-gray-300">
                <tr>
                  <th className="py-1 px-2">Número de habitación</th>
                  <th className="py-2 px-4">Tipo de habitación</th>
                  <th className="py-2 px-4">Número de camas</th>
                  <th className="py-2 px-4">Tipo de cama 01</th>
                  <th className="py-2 px-4">Tipo de cama 02</th>
                  <th className="py-2 px-4">Foto</th>
                </tr>
              </thead>
              <tbody className="bg-gray-200">
                {[...Array(3)].map((_, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-center">Habitación 0{index + 1}</td>
                    <td className="px-4 py-2 text-center">Habitación matrimonial</td>
                    <td className="px-4 py-2 text-center">01</td>
                    <td className="px-4 py-2 text-center">Queen</td>
                    <td className="px-4 py-2 text-center">-</td>
                    <td className="px-4 py-2 text-center">imagen</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
      {roomDetails === index && (
        <tr>
          <td colSpan={12}>
            <table className="w-full table-fixed">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th rowSpan={2}>Fotos</th>
                  <th colSpan={2} className="border-r border-r-gray-100">
                    Lo que frece este sitio
                  </th>
                  <th colSpan={2}>Servicios</th>
                </tr>
                <tr className="bg-gray-500">
                  <th>Qué está incluido</th>
                  <th className="border-r border-r-gray-100">Qué no está incluido</th>
                  <th>Cancelación gratis</th>
                  <th>Cobro adicional</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                <tr>
                  <td>
                    {room.Room_Details?.images_url?.map((image, index) => (
                      <div key={image} className="w-full flex">
                        <img src={image} alt={`Image of the room ${index + 1}`} className="border-md w-20" />
                      </div>
                    ))}
                  </td>
                  <td>
                    <ul>
                      <li>Wifi</li>
                      <li>Calefacción</li>
                      <li>Cocina</li>
                      <li>Estacionamiento</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Piscina</li>
                      <li>Lavadora</li>
                    </ul>
                  </td>
                  <td>Cancelación gratuita hasta de 10 días de antelación</td>
                  <td>Cobro adicional hasta 3 días antes de antelación</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )}

      {/* Edit department */}
      {isOpenModal && (
        <Modal title="Editar departamento" closeModal={closeModal}>
          <EditForm initialValue={room} />
        </Modal>
      )}
    </>
  )
}

TableRow.propTypes = {
  room: Types.object,
  index: Types.number
}

export default TableRow
