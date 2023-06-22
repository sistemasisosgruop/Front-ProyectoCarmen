import { UserResponse } from 'types/user'
import { useEffect, useState } from 'react'
import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { API_URL } from '@utils/consts'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Heading from '@components/Heading'
import THead from '@components/THead'
import Paginate from '@components/Paginate'
import UserItem from '@features/users/components/UserItem'
import { BiDownload } from 'react-icons/bi'
import { FaUserPlus } from 'react-icons/fa'
import { useModal } from '@hooks/useModal'
import Modal from '@components/Modal'

function UsersPage() {
  const [usersResponse, setUsersResponse] = useState<UserResponse>(
    {} as UserResponse
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const { isOpenModal, openModal, closeModal } = useModal()

  useEffect(() => {
    getUsers()
  }, [pageNumber])

  const getUsers = () => {
    axios
      .get(`${API_URL}/users?page=${pageNumber}`)
      .then(response => {
        setIsLoading(true)
        setUsersResponse(camelcaseKeys(response.data?.results))
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <AdminLayout title="Usuarios">
        <Heading title="Tabla de usuarios" />

        <AdminSection>
          <div className="w-full flex justify-between items-center gap-2 mb-4">
            <input
              type="search"
              name="search"
              placeholder="Buscar usuario..."
              className="px-4 py-2 text-base text-gray-600 border border-gray-200 rounded-xl focus:outline-none focus:border-blue"
            />
            <div className="flex justify-center items-center gap-4">
              <button type="button" className="p-1 text-dark">
                <BiDownload size={18} />
              </button>
              <button
                type="button"
                onClick={openModal}
                className="px-6 py-2 flex justify-center items-center gap-2 bg-blue text-white rounded-xl"
              >
                <span>Agregar administrador</span>
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
                  {usersResponse?.results?.map(user => (
                    <UserItem key={user.id} user={camelcaseKeys(user)} />
                  ))}
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

      {isOpenModal && (
        <Modal title="Crear usuario administrador" closeModal={closeModal}>
          <h1>Buenas noches</h1>
        </Modal>
      )}
    </>
  )
}

export default UsersPage
