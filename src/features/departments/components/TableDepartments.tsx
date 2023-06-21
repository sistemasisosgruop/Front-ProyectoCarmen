import { useEffect, useState } from 'react'
import THead from '@components/THead'
import TableRow from './TableRow'
import Paginate from '@components/Paginate'
import axios from 'axios'
import { DepartmentResponse } from 'types/department'
import { API_URL } from '@utils/consts'
import camelcaseKeys from 'camelcase-keys'

function TableDepartments() {
  const [departments, setDepartments] = useState<DepartmentResponse>({} as DepartmentResponse)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getDepartments()
  }, [pageNumber])

  const getDepartments = async () => {
    await axios
      .get(`${API_URL}/rooms?page=${pageNumber}`, {
        headers: { Authorization: window.sessionStorage.getItem('token') }
      })
      .then(response => {
        console.log(response.data)
        setDepartments(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
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
            {departments?.results?.map((room, index) => (
              <TableRow key={room.id} room={camelcaseKeys(room)} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end items-center">
        <Paginate counter={departments.totalPages} setCounter={setPageNumber} />
      </div>
    </div>
  )
}

export default TableDepartments
