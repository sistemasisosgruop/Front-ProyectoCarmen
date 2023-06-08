import { useEffect, useState } from 'react'
import axios from '@api/axios'
import { toast } from 'react-toastify'
import THead from '@components/THead'
import Paginate from '@components/Paginate'
import TableRow from './TableRow'

const CouponList = ({ isOpenModal }) => {
  const [coupons, setCoupons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [numberPage, setNumberPage] = useState(1)

  useEffect(() => {
    getCoupons()
  }, [numberPage, isOpenModal])

  const getCoupons = async () => {
    try {
      const response = await axios.get(`coupons?page=${numberPage}`, {
        headers: {
          Authorization: `jwt ${window.sessionStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })

      setCoupons(response.data)
    } catch (error) {
      toast.error(error.response?.statusText)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="overflow-x-scroll rounded-xl">
        <table className="w-full">
          <THead
            headers={[
              '#',
              'Código de copón',
              'Descuento',
              'Producto asignado',
              'Acciones'
            ]}
            rowCellStyles="bg-blue text-white px-2 py-2 whitespace-nowrap"
          />
          <tbody>
            {coupons.results?.results?.map((coupon, index) => (
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
        <Paginate
          counter={coupons.results?.totalPages}
          setCounter={setNumberPage}
        />
      </div>
    </div>
  )
}

export default CouponList
