import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Heading from '@components/Heading'
import THead from '@components/THead'
import { BiDownload, BiEdit, BiTrash } from 'react-icons/bi'

const Users = (): JSX.Element => {
  return (
    <AdminLayout title='Usuarios'>
      <Heading title='Tabla de usuarios' />

      <AdminSection>
        <div className='w-full flex justify-between items-center gap-2 mb-4'>
            <input
              type='search'
              name='search'
              placeholder='Buscar usuario...'
              className='px-4 py-2 text-base text-gray-600 border border-gray-200 rounded-xl focus:outline-none focus:border-blue'
            />
          <button
            type='button'
            className='p-1 text-dark'
          >
            <BiDownload size={18} />
          </button>
        </div>

        <div className='overflow-x-scroll rounded-xl'>
          <table className='w-full'>
            <THead
              headers={['#', 'Nombre completo', 'Género', 'Tipo de documento', 'N° documento', 'Correo', 'Contraseña', 'Fecha de nacimiento', 'Estudiante', 'País', 'Celular', 'Código postal', 'Dirección', 'Acciones']}
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
                  <td className='whitespace-nowrap px-4 py-2'>
                    Masculino
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    DNI
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    12345678
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    correo@gmail.com
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    123456
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    12/07/2015
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    Si
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    Perú
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    999 999 999
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    13301
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    Urb. Las Rosas F-1 Yanahuara
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

export default Users
