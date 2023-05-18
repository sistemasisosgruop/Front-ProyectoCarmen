import AdminLayout from '../../../components/layouts/AdminLayout'
import AdminSection from '../../../components/layouts/AdminSection'
import HeadingText from '../../../components/HeadingText'
import THead from '../../../components/THead'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDownload } from 'react-icons/bi'

const Receipts = (): JSX.Element => {
  return (
    <AdminLayout title='Comprobantes'>
      <HeadingText text='Comprobantes' />

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
              placeholder='Buscar comprobantes...'
              className='w-full pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue sm:w-auto'
            />
          </div>
        </article>

        <div className='overflow-x-scroll rounded-xl'>
          <table className='w-full'>
            <THead
              headers={['#', 'N° operación', 'Nombre completo', 'Producto', 'Fecha de compra', 'Hora de compra', 'Método de pago', 'Código de cupón', 'Acciones']}
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
                    0001221
                  </td>
                  <td className='px-4 py-2'>
                    Yoel Valverde Polo
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    Paquete Turístico Valle Sagrado
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    20/03/2023
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    10:00 a.m.
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    PayPal
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    AXA1928983
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    <article className='flex justify-center items-center gap-2'>
                      <button
                        type='button'
                        className='p-1 text-dark'
                      >
                        <BiDownload size={18} />
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

export default Receipts
