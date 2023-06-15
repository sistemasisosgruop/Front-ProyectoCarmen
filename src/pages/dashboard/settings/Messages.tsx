import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Heading from '@components/Heading'
import THead from '@components/THead'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'

function Messages() {
  return (
    <AdminLayout title="Lista de mensajes">
      <Heading title="Mensajes" />

      <AdminSection>
        <article className="flex justify-between items-center gap-4 mb-8">
          <div className="w-full relative">
            <label htmlFor="searchClient" className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600">
              <AiOutlineSearch size={18} />
            </label>
            <input
              type="search"
              name="searchClient"
              placeholder="Buscar mensajes..."
              className="w-full pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue sm:w-auto"
            />
          </div>
        </article>

        <div className="overflow-x-scroll rounded-xl">
          <table className="w-full">
            <THead
              headers={[
                '#',
                'Nombre completo',
                'Tipo de documento',
                'Número de documento',
                'Correo',
                'Celular',
                'Asunto',
                'Contenido del mensaje',
                'Acciones'
              ]}
              rowCellStyles="bg-blue text-white px-2 py-2 whitespace-nowrap"
            />
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="text-sm">
                  <td>
                    <p className="text-center font-bold">{index + 1}</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">Yoel Valverde Polo</td>
                  <td className="px-4 py-2">DNI</td>
                  <td className="whitespace-nowrap px-4 py-2">12345678</td>
                  <td className="whitespace-nowrap px-4 py-2">correo@gmail.com</td>
                  <td className="whitespace-nowrap px-4 py-2">999 999 999</td>
                  <td className="whitespace-nowrap px-4 py-2">Información</td>
                  <td className="whitespace-nowrap px-4 py-2">Contenido del mensaje</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <article className="flex justify-center items-center gap-2">
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
  )
}

export default Messages
