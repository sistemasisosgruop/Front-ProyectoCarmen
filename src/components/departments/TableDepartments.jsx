import { useEffect, useState } from 'react'
import axios from '@api/axios'
import { toast } from 'react-toastify'
import THead from '@components/THead'
import TableRow from './TableRow'
import Paginate from '@components/Paginate'

const TableDepartments = () => {
  const [rooms, setRooms] = useState([] || null)
  const [isLoading, setIsLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    getDepartments()
  }, [pageNumber])

  const getDepartments = async () => {
    try {
      const response = await axios.get(`rooms?page=${pageNumber}`, {
        headers: {
          Authorization: `jwt ${window.sessionStorage.getItem('token')}`
        }
      })
      setIsLoading(false)
      setRooms(response.data?.results)
    } catch (error) {
      toast.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="rounded">
      <div className=" overflow-x-scroll">
        <table className="w-full">
          <THead
            headers={[
              '#',
              'Tipo de habitación',
              'Descripción general',
              'Dirección',
              'Precio por noche',
              'Fechas disponibles',
              'N° de baños',
              'N° de camas',
              'Número de habitaciones',
              'Extras',
              'Detalles',
              'Acciones'
            ]}
            rowCellStyles="bg-blue text-white px-2 py-2 whitespace-nowrap"
          />
          <tbody>
            {isLoading && (
              <tr>
                <td>
                  <p className="text-center text-xl text-blue">Cargando</p>
                </td>
              </tr>
            )}
            {rooms.results?.map((room, index) => (
              <TableRow key={room.id} room={room} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end items-center">
        <Paginate counter={rooms.totalPages} setCounter={setPageNumber} />
      </div>
    </div>
  )
}

export default TableDepartments
