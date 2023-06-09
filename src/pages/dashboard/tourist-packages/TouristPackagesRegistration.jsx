import { useModal } from '@hooks/useModal'
import Heading from '@components/Heading'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import THead from '@components/THead'
import Modal from '@components/Modal'
import AddTourPackage from '@components/tourist-packages/AddTourPackage'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown, BiEdit, BiTrash } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'

const TouristPackages = () => {
  const { isOpenModal, openModal, closeModal } = useModal()

  return (
    <>
      <AdminLayout title="Registro de paquetes turísticos">
        <Heading title="Paquetes turísticos" />

        <AdminSection>
          <article className="flex flex-col justify-between items-end gap-4 mb-8 sm:flex-row">
            <div className="w-full relative">
              <label
                htmlFor="searchClient"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600"
              >
                <AiOutlineSearch size={18} />
              </label>
              <input
                type="search"
                name="searchClient"
                placeholder="Buscar paquetes turísticos..."
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
                  'Nombre del tour',
                  'Descripción del tour',
                  'Extras',
                  'Ubicación',
                  'Duración',
                  'Dificultad',
                  'Idiomas',
                  'N° personas',
                  'Edades',
                  'Información',
                  'Detalles',
                  'Acciones'
                ]}
                rowCellStyles="bg-blue text-white px-2 py-2 whitespace-nowrap"
              />
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="text-sm">
                    <td>{index + 1}</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      Valle sagrado de los incas
                    </td>
                    <td className="px-4 py-2">
                      El servicio blabla blabla blabla blabla blabla blabla
                      blabla blabla blabla blabla blabla blabla blabla
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">-</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      Valle sagrado
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">8 Horas</td>
                    <td className="whitespace-nowrap px-4 py-2">Baja</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      Español, Inglés y Portugués
                    </td>
                    <td className="px-4 py-2">Máximo 15 personas por grupo</td>
                    <td className="whitespace-nowrap px-4 py-2">1 a 75 años</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <button type="button" className="p-1 text-dark">
                        <BiChevronDown size={24} />
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <button type="button" className="p-1 text-dark">
                        <BiChevronDown size={24} />
                      </button>
                    </td>
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
        <Modal title="Agregar un paquete turístico" closeModal={closeModal}>
          <AddTourPackage />
        </Modal>
      )}
    </>
  )
}

export default TouristPackages
