import { useEditUserModal } from '../hooks/useEditUserModal'
import dayjs from 'dayjs'
import { BiEdit, BiTrash } from 'react-icons/bi'

import { type User } from 'types/user'
import { type Role } from 'types/role'
import { useState } from 'react'
import EditUserModal from './EditUserModal'

interface Props {
  user: User
  index: number
  role: Role | null
}

function UserItem({ user, index, role }: Props) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const editModal = useEditUserModal()

  const toggleModal = (user: User) => {
    setCurrentUser(user)
    editModal.onOpen()
  }

  return (
    <>
      <tr className="text-sm">
        <td>
          <p className="text-center font-bold">
            {index + 1}
          </p>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {user.firstName} {user.lastName}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {user.genre}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {user.documentType}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {user.documentNumber}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {user.email}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {dayjs(user.birthday).format('D MMM. YYYY')}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-center">
          {user.student && (
            <span className="bg-green px-1 py-[1px] text-sm text-white rounded">
              SÍ
            </span>
          )}
          {!user.student && (
            <span className="bg-green px-1 py-[1px] text-sm text-white rounded">
              NO
            </span>
          )}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {user.phoneNumber}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-center">
          {user.countryCode}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-center uppercase">
          {role?.name}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <article className="flex justify-center items-center gap-2">
            <button type="button" onClick={() => toggleModal(user)} className="p-1 text-dark">
              <BiEdit size={18} />
            </button>
            <button type="button" className="p-1 text-dark">
              <BiTrash size={18} />
            </button>
          </article>
        </td>
      </tr>

      <EditUserModal user={currentUser} />
    </>
  )
}

export default UserItem
