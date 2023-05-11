import HeadingText from '../../../components/HeadingText'
import AdminLayout from '../../../components/layouts/AdminLayout'
import AdminSection from '../../../components/layouts/AdminSection'
import THead from '../../../components/THead'
import { IoMdAdd } from 'react-icons/io'
import { BiEdit, BiTrash } from 'react-icons/bi'

const Roles = (): JSX.Element => {
  return (
    <AdminLayout title='Roles de usuarios'>
      <HeadingText text='Roles' />

      <AdminSection>
        <article className='flex justify-start items-center gap-4 mb-8'>
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
          <table>
            <THead
              headers={['#', 'Rol', 'Permisos', 'Acciones']}
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
                    Administrador
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    Todos
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

export default Roles
