import { useState } from 'react'
import { useGetRequest } from '@hooks/useGetRequest'
import { useCreateDepartment } from '../hooks/useCreateDepartment'
import THead from '@components/THead'
import Paginate from '@components/Paginate'
import DepartmentItem from './DepartmentItem'

import { type DepartmentResponse } from 'types/department'

function DepartmentList() {
  const [pageNumber, setPageNumber] = useState(1)
  const createDepartment = useCreateDepartment()
  const { data, isLoading } = useGetRequest<DepartmentResponse>({
    url: 'departments',
    pageNumber,
    modal: createDepartment
  })

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
            {data?.results?.map((department, index) => (
              <DepartmentItem
                key={department.id}
                department={department}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end items-center">
        <Paginate counter={data?.totalPages} setCounter={setPageNumber} />
      </div>
    </div>
  )
}

export default DepartmentList
