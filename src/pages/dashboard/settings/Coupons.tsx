import { useModal } from '@hooks/useModal'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Modal from '@components/Modal'
import Heading from '@components/Heading'
import THead from '@components/THead'
import Button from '@components/Button'
import AddCouponForm from '@components/coupons/AddCouponForm'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { BiEdit, BiTrash } from 'react-icons/bi'

const Coupons = (): JSX.Element => {
  const { isOpenModal, openModal, closeModal } = useModal()

  return (
    <>
      <AdminLayout title='Registro de cupones'>
        <Heading title='Cupones' />

        <AdminSection>
          <article className='flex flex-col justify-between items-end gap-4 mb-8 sm:flex-row'>
            <div className='w-full relative'>
              <label
                htmlFor='searchClient'
                className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-600'
              >
                <AiOutlineSearch size={18} />
              </label>
              <input
                type='search'
                name='searchClient'
                placeholder='Buscar cupones...'
                className='w-full pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue sm:w-auto'
              />
            </div>

            <Button
              text='Agregar'
              onClick={openModal}
              background='bg-orange'
              isIcon={true}
              icon={<IoMdAdd size={18} />}
            />
          </article>

          <div className='overflow-x-scroll rounded-xl'>
            <table className='w-full'>
              <THead
                headers={['#', 'Código de cipón', 'Descuento', 'Producto asignado', 'Acciones']}
                rowCellStyles='bg-blue text-white px-2 py-2 whitespace-nowrap'
              />
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className='text-sm'>
                    <td>
                      <p className='text-center font-bold'>
                        {index + 1}
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      AX0192
                    </td>
                    <td className='px-4 py-2'>
                      15 %
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      Departamento
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
        <Modal title='Crear cupón' closeModal={closeModal}>
          <AddCouponForm
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  )
}

export default Coupons
