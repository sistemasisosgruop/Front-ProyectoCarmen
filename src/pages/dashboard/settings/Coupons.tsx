import HeadingText from '../../../components/HeadingText'
import AdminLayout from '../../../components/layouts/AdminLayout'
import AdminSection from '../../../components/layouts/AdminSection'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import THead from '../../../components/THead'
import { BiEdit, BiTrash } from 'react-icons/bi'

const Coupons = (): JSX.Element => {
  return (
    <AdminLayout title='Registro de cupones'>
      <HeadingText text='Cupones' />

      <AdminSection>
        <article className='flex justify-between items-center gap-4 mb-8'>
          <div className='relative'>
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
              className='pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue'
            />
          </div>

          <button
            type='button'
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
  )
}

export default Coupons
