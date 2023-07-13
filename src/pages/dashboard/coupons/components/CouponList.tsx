import { useState } from 'react'
import THead from '@components/THead'
import Paginate from '@components/Paginate'
import TableRow from './TableRow'
import { useGetRequest } from '@hooks/useGetRequest'
import { type CouponResponse } from 'types/coupon'

function CouponList() {
  const [numberPage, setNumberPage] = useState(1)
  const { data, isLoading } = useGetRequest<CouponResponse>({
    url: 'coupons',
    pageNumber: numberPage
  })

  return (
    <div>
      <div className="overflow-x-scroll rounded-xl">
        <table className="w-full">
          <THead
            headers={['#', 'Código de copón', 'Descuento', 'Producto asignado', 'Acciones']}
            rowCellStyles="bg-blue text-white px-2 py-2 whitespace-nowrap"
          />
          <tbody>
            {data?.results?.map((coupon, index) => (
              <TableRow key={coupon.id} coupon={coupon} index={index} />
            ))}
            {isLoading && (
              <tr>
                <td colSpan={5} className="text-center text-xl py-2">
                  Cargando...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="my-4 flex justify-end items-center">
        <Paginate counter={data?.totalPages} setCounter={setNumberPage} />
      </div>
    </div>
  )
}

export default CouponList
