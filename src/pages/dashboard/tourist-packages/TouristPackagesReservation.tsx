import AdminLayout from '@layouts/AdminLayout'
import Heading from '@components/Heading'
import AdminSection from '@components/layouts/AdminSection'
import THead from '@components/THead'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown, BiEdit, BiTrash } from 'react-icons/bi'

const TouristPackagesReservation = (): JSX.Element => {
  return (
    <AdminLayout title="Reserva de paquetes turísticos">
      <Heading title="Reservas" />

      <AdminSection>
        <article className="flex justify-start items-center gap-4 mb-8">
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
              placeholder="Buscar reserva de paquetes turísticos..."
              className="w-full pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue sm:w-auto"
            />
          </div>
        </article>

        <div className="overflow-x-scroll rounded-xl">
          <table className="w-full">
            <THead
              headers={[
                '#',
                'Nombre del tour',
                'Fecha escogida',
                'Horario escogido',
                'Ubicación',
                'Fecha de compra',
                'Hora de compra',
                'Monto de compra',
                'N° personas',
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
                  <td className="whitespace-nowrap px-4 py-2">
                    Valle sagrado de los Incas
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">16/04/2023</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    08:00 a.m.- 06:30 p.m.
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">Valle sagrado</td>
                  <td className="whitespace-nowrap px-4 py-2">20/05/2023</td>
                  <td className="whitespace-nowrap px-4 py-2">12:00 p.m.</td>
                  <td className="whitespace-nowrap px-4 py-2">S/. 1,200.00</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex justify-center items-center gap-4">
                      <span>2</span>
                      <button type="button" className="p-1 text-dark">
                        <BiChevronDown size={24} />
                      </button>
                    </div>
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
  )
}

export default TouristPackagesReservation
