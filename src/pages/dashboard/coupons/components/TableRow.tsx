import { BiEdit, BiTrash } from 'react-icons/bi'

interface Props {
  coupon: any
  index: number
}

function TableRow({ coupon, index }: Props) {
  return (
    <>
      <tr className="text-sm">
        <td>
          <p className="text-center font-bold">{index + 1}</p>
        </td>
        <td className="whitespace-nowrap px-4 py-2">{coupon.coupon_code}</td>
        <td className="px-4 py-2">
          {coupon.discount.toLocaleString(undefined, {
            style: 'percent'
          })}
        </td>
        <td className="whitespace-nowrap px-4 py-2">{coupon.room_id ? 'DEPARTAMENTO' : 'TOUR'}</td>
        <td className="whitespace-nowrap px-4 py-2">
          <article className="flex justify-center items-center gap-2">
            <button type="button" className="p-1 text-dark">
              <BiEdit size={18} />
            </button>
            <button type="button" className="p-1 text-dark">
              <BiTrash size={18} />
            </button>
          </article>
        </td>
      </tr>

      {/* isOpenModal && (
        <Modal title="Editar cupón" closeModal={closeModal}>
          <EditCoupon initialValue={coupon} />
        </Modal>
      ) */}
    </>
  )
}

export default TableRow
