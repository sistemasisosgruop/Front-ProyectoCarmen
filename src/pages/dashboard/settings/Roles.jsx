import { useModal } from '@hooks/useModal'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Heading from '@components/Heading'
import THead from '@components/THead'
import Modal from '@components/Modal'
import AddRole from '@components/roles/AddRole'
import Button from '@components/Button'
import { IoMdAdd } from 'react-icons/io'
import { BiEdit, BiTrash } from 'react-icons/bi'

const Roles = () => {
  const { isOpenModal, openModal, closeModal } = useModal()

  return (
    <>
      <AdminLayout title="Roles de usuarios">
        <Heading title="Roles" />

        <AdminSection>
          <article className="flex justify-start items-center gap-4 mb-8">
            <Button
              text="Agregar"
              background="bg-orange"
              onClick={openModal}
              isIcon={true}
              icon={<IoMdAdd size={18} />}
              position="right"
            />
          </article>

          <div className="overflow-x-scroll rounded-xl">
            <table>
              <THead
                headers={['#', 'Rol', 'Permisos', 'Acciones']}
                rowCellStyles="bg-blue text-white px-2 py-2 whitespace-nowrap"
              />
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="text-sm">
                    <td>
                      <p className="text-center font-bold">{index + 1}</p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      Administrador
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">Todos</td>
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
                ))}
              </tbody>
            </table>
          </div>
        </AdminSection>
      </AdminLayout>
      {isOpenModal && (
        <Modal title="Agregar nuevo rol" closeModal={closeModal}>
          <AddRole closeModal={closeModal} />
        </Modal>
      )}
    </>
  )
}

export default Roles
