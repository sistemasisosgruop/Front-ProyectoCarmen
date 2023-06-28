import { useEffect, useState } from 'react'
import THead from '@components/THead'
import Paginate from '@components/Paginate'
import axios from 'axios'
import { DepartmentResponse } from 'types/department'
import { API_URL } from '@utils/consts'
import camelcaseKeys from 'camelcase-keys'
import DepartmentItem from './DepartmentItem'
import { toast } from 'react-toastify'

function DepartmentList() {
  const [departments, setDepartments] = useState<DepartmentResponse>({} as DepartmentResponse)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const abortController = new AbortController()
    getDepartments(abortController)

    return () => {
      abortController.abort()
    }
  }, [pageNumber])

  const getDepartments = async (abortController: AbortController) => {
    await axios
      .get(`${API_URL}/rooms`, {
        headers: { Authorization: window.sessionStorage.getItem('token') },
        signal: abortController.signal
      })
      .then(response => {
        setDepartments(response.data)
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message)
        }
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
            {departments?.results?.map((department, index) => (
              <DepartmentItem
                key={department.id}
                department={camelcaseKeys(department)}
                index={index}
              />
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

export default DepartmentList
