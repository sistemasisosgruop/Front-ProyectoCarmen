import { useState } from 'react'
import { useApiGet } from '@hooks/useApiGet'
import THead from '@components/THead'
import TableRow from './TableRow'
import Paginate from '@components/Paginate'

const TableDepartments = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { data, isLoading } = useApiGet({ url: 'rooms', pageNumber })

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
            {data?.results?.map((room, index) => (
              <TableRow key={room.id} room={room} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end items-center">
        <Paginate counter={data?.results?.totalPages} setCounter={setPageNumber} />
      </div>
    </div>
  )
}

export default TableDepartments
