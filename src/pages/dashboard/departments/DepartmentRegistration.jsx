import { useModal } from '@hooks/useModal'
import { useApiGet } from '@hooks/useApiGet'
import Heading from '@components/Heading'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Modal from '@components/Modal'
import AddForm from '@components/departments/AddForm'
import TableRow from '@components/departments/TableRow'
import THead from '@components/THead'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

const DepartmentRegistration = () => {
  const { isOpenModal, openModal, closeModal } = useModal()
  const { data, setData, isLoading } = useApiGet(`rooms?page=${2}`)

  const rooms = data?.results?.results

  const addNewDepartment = newData => {
    setData([...rooms, newData])
  }

  return (
    <>
      <AdminLayout title="Registro de camas">
        <Heading title="Departamentos" />

        <AdminSection>
          <article className="flex flex-col justify-between items-end gap-4 mb-8 sm:flex-row">
            <div className="relative w-full">
              <label
                htmlFor="searchClient"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600"
              >
                <AiOutlineSearch size={18} />
              </label>
              <input
                type="search"
                name="searchClient"
                placeholder="Buscar cliente..."
                className="w-full pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue sm:w-auto"
              />
            </div>

            <button
              type="button"
              onClick={openModal}
              className="bg-orange px-6 py-2 rounded-xl text-white font-bold flex justify-center items-center gap-2 hover:bg-opacity-90"
            >
              <span>Agregar</span>
              <IoMdAdd size={18} />
            </button>
          </article>

          <div className="overflow-x-scroll rounded-xl">
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
                {rooms?.map((room, index) => (
                  <TableRow key={room.id} room={room} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </AdminSection>
      </AdminLayout>

      {isOpenModal && (
        <Modal title="Agregar una cama" closeModal={closeModal}>
          <AddForm closeModal={closeModal} onNewRecord={addNewDepartment} />
        </Modal>
      )}
    </>
  )
}

export default DepartmentRegistration
