import HeadingText from '../../../components/HeadingText'
import AdminLayout from '../../../components/layouts/AdminLayout'
import AdminSection from '../../../components/layouts/AdminSection'
import { AiFillCheckCircle, AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import THead from '../../../components/THead'

const Comments = (): JSX.Element => {
  return (
    <AdminLayout title='Registro de comentarios'>
      <HeadingText text='Comentarios' />

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
              placeholder='Buscar comentarios...'
              className='pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue'
            />
          </div>
        </article>

        <div className='overflow-x-scroll rounded-xl'>
          <table className='w-full'>
            <THead
              headers={['#', 'Nombre completo', 'Contenido del comentario', 'Calificación', 'Acciones']}
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
                    Yoel Valverde Polo
                  </td>
                  <td className='px-4 py-2'>
                    Contenido completo del comentario
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    5.0
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    <article className='flex justify-center items-center gap-2'>
                      <button
                        type='button'
                        className='bg-green px-2 py-1 rounded-md text-white font-bold flex justify-center items-center gap-2'
                      >
                        <span>
                          Aprobar
                        </span>
                        <AiFillCheckCircle size={18} />
                      </button>
                      <button
                        type='button'
                        className='bg-red-600 px-2 py-1 rounded-md text-white font-bold flex justify-center items-center gap-2'
                      >
                        <span>
                          Borrar
                        </span>
                        <AiFillCloseCircle size={18} />
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

export default Comments
