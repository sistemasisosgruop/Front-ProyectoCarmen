import { useEffect, useState } from 'react'
// import { useApiGet } from '@hooks/useApiGet'
import THead from '@components/THead'
import TableRow from './TableRow'
import Paginate from '@components/Paginate'
import axios from '@lib/axios'
import { Department } from 'types/department'

function TableDepartments() {
  const [pageNumber, setPageNumber] = useState(1)
  const [departments, setDepartments] = useState<Department[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  // const { data, isLoading } = useApiGet({ url: 'rooms', pageNumber })

  useEffect(() => {
    getDepartments()
  }, [])

  const getDepartments = async () => {
    try {
      const response = await axios.get(`rooms?page=${pageNumber}`, {
        headers: { Authorization: window.sessionStorage.getItem('token') }
      })
      console.log(response)
      setDepartments(response.data?.results)
    } catch (error) {
      console.log(error)
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
            {departments.map((room, index) => (
              <TableRow key={room.id} room={room} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end items-center">
        <Paginate counter={departments?.totalPages} setCounter={setPageNumber} />
      </div>
    </div>
  )
}

export default TableDepartments
