import Modal from '@components/Modal'
import { useModal } from '@hooks/useModal'
import dayjs from 'dayjs'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { User } from 'types/user'

interface Props {
  user: User
}

function UserItem({ user }: Props) {
  const { isOpenModal, openModal, closeModal } = useModal()

  return (
    <>
      <tr className="text-sm">
        <td>
          <p className="text-center font-bold">{1 + 1}</p>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {user.firstName} {user.lastName}
        </td>
        <td className="whitespace-nowrap px-4 py-2">{user.genre}</td>
        <td className="whitespace-nowrap px-4 py-2">{user.documentType}</td>
        <td className="whitespace-nowrap px-4 py-2">{user.documentNumber}</td>
        <td className="whitespace-nowrap px-4 py-2">{user.email}</td>
        <td className="whitespace-nowrap px-4 py-2">
          {dayjs(user.birthday).format('D MMM. YYYY')}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-center">
          {user.student ? (
            <span className="bg-green px-1 py-[1px] text-sm text-white rounded">
              SÍ
            </span>
          ) : (
            <span className="bg-green px-1 py-[1px] text-sm text-white rounded">
              NO
            </span>
          )}
        </td>
        <td className="whitespace-nowrap px-4 py-2">{user.phoneNumber}</td>
        <td className="whitespace-nowrap px-4 py-2 text-center">
          {user.countryCode}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-center">
          {user.roleId}
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
      {isOpenModal && (
        <Modal title="Editar usuario" closeModal={closeModal}>
          <h2>Editando el usuairo</h2>
        </Modal>
      )}
    </>
  )
}

export default UserItem
