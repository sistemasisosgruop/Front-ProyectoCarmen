import { useState } from 'react'
import { useGetRequest } from '@hooks/useGetRequest'
import { useCreateUserModal } from './hooks/useCreateUserModal'
import { type FieldValues, useForm } from 'react-hook-form'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Heading from '@components/Heading'
import THead from '@components/THead'
import Paginate from '@components/Paginate'
import UserItem from './components/UserItem'
import Input from '@forms/Input'
import AddUserModal from './components/AddUserModal'
import { BiDownload, BiSearch } from 'react-icons/bi'
import { FaUserPlus } from 'react-icons/fa'

import { type UserResponse } from 'types/user'
import { type Role, type RoleResponse } from 'types/role'

function UsersPage() {
  const [pageNumber, setPageNumber] = useState(1)
  const createModal = useCreateUserModal()
  const { register, formState: { errors } } = useForm<FieldValues>()
  const { data: usersResponse, isLoading } = useGetRequest<UserResponse>({
    url: 'users',
    pageNumber,
    modal: createModal
  })
  const { data: rolesResponse } = useGetRequest<RoleResponse>({
    url: 'roles'
  })

  return (
    <>
      <AdminLayout title="Usuarios">
        <Heading title="Tabla de usuarios" />

        <AdminSection>
          <div className="w-full flex justify-between items-center gap-2 mb-4">
            <div className='flex items-center gap-4'>
              <Input
                name='search'
                label='Buscar cliente'
                register={register}
                errors={errors}
                required
                showIcon
                icon={BiSearch}
              />
              <select {...register('filter')} className='inline-block w-full px-4 h-[35.5px] bg-transparent border border-gray-400 rounded-xl'>
                <option value='all'>
                  Todos
                </option>
                <option value='clients'>
                  Clientes
                </option>
                <option value='admins'>
                  Administradores
                </option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-4">
              <button type="button" className="p-1 text-dark">
                <BiDownload size={18} />
              </button>
              <button
                type="button"
                onClick={createModal.onOpen}
                className="px-6 py-2 flex justify-center items-center gap-2 bg-blue text-white rounded-xl"
              >
                <span>Agregar</span>
                <FaUserPlus size={18} />
              </button>
            </div>
          </div>

          <div className="rounded">
            <div className="overflow-x-scroll">
              {isLoading && <p>Cargando...</p>}
              <table className="w-full">
                <THead
                  headers={[
                    '#',
                    'Nombre completo',
                    'Género',
                    'Tipo de documento',
                    'N° documento',
                    'Correo',
                    'Fecha de nacimiento',
                    'Estudiante',
                    'Celular',
                    'Código postal',
                    'Rol',
                    'Acciones'
                  ]}
                  rowCellStyles="bg-blue text-white px-2 py-2 whitespace-nowrap"
                />
                <tbody>
                  {usersResponse?.results?.map((user, index) => {
                    const userRole = rolesResponse?.results?.find((role) => role.id === user.roleId)
                    return (
                      <UserItem
                        key={user.id}
                        index={index}
                        user={user}
                        role={userRole ?? null}
                      />
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end items-center">
              <Paginate
                counter={usersResponse?.totalPages}
                setCounter={setPageNumber}
              />
            </div>
          </div>
        </AdminSection>
      </AdminLayout>

      <AddUserModal />
    </>
  )
}

export default UsersPage
