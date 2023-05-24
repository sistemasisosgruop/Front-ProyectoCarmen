import { useModal } from '@hooks/useModal'
import Heading from '@components/Heading'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Modal from '@components/Modal'
import AddBedForm from '@components/beds/AddBedForm'
import THead from '@components/THead'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { BiChevronDown, BiEdit, BiTrash } from 'react-icons/bi'

const BedRegistration = (): JSX.Element => {
  const { isOpenModal, openModal, closeModal } = useModal()
  return (
    <>
      <AdminLayout title='Registro de camas'>
        <Heading title='Camas' />

        <AdminSection>
          <article className='flex flex-col justify-between items-end gap-4 mb-8 sm:flex-row'>
            <div className='relative w-full'>
              <label
                htmlFor='searchClient'
                className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-600'
              >
                <AiOutlineSearch size={18} />
              </label>
              <input
                type='search'
                name='searchClient'
                placeholder='Buscar cliente...'
                className='w-full pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue sm:w-auto'
              />
            </div>

            <button
              type='button'
              onClick={openModal}
              className='bg-orange px-6 py-2 rounded-xl text-white font-bold flex justify-center items-center gap-2 hover:bg-opacity-90'
            >
              <span>
                Agregar
              </span>
              <IoMdAdd size={18} />
            </button>
          </article>

          <div className='overflow-x-scroll rounded-xl'>
            <table className='w-full'>
              <THead
                headers={['#', 'Tipo de habitación', 'Descripción general', 'Dirección', 'Precio por noche', 'Fechas disponibles', 'N° de baños', 'N° de camas', 'Número de habitaciones', 'Extras', 'Detalles', 'Acciones']}
                rowCellStyles='bg-blue text-white px-2 py-2 whitespace-nowrap'
              />
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className='text-sm'>
                    <td>{index + 1}</td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      Departamento
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      Descripción
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      Urb. Los Rosales F-1 Yanahuara
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      S/. 1,200.00
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      30/03/2023 - 05/08/2023
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      1
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      5
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <div className='flex justify-center items-center gap-4'>
                        <span>
                          3
                        </span>
                        <button
                          type='button'
                          className='p-1 text-dark'
                        >
                          <BiChevronDown size={24} />
                        </button>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      Toallas, extras, jabón, bata.
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <button
                        type='button'
                        className='p-1 text-dark'
                      >
                        <BiChevronDown size={24} />
                      </button>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <article className='flex justify-center items-center gap-2'>
                        <button
                          type='button'
                          className='p-1 text-dark'
                        >
                          <BiEdit size={18} />
                        </button>
                        <button
                          type='button'
                          className='p-1 text-dark'
                        >
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
        <Modal title='Agregar una cama' closeModal={closeModal}>
          <AddBedForm />
        </Modal>
      )}
    </>
  )
}

export default BedRegistration
