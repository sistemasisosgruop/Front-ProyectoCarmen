import { useState } from 'react'
import DatePicker from 'react-datepicker'
import AdminLayout from '../../components/layouts/AdminLayout'
import AdminSection from '../../components/layouts/AdminSection'
import HeadingText from '../../components/HeadingText'
import { BiChevronDown, BiDownload, BiEdit, BiTrash } from 'react-icons/bi'

import 'react-datepicker/dist/react-datepicker.css'
import THead from '../../components/THead'

const AdminFlights = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date())

  return (
    <AdminLayout title='Vuelos'>
      <HeadingText text='Reservas de vuelos' />

      <AdminSection>
        <div className='w-full flex flex-col justify-between items-center gap-2 mb-4 md:flex-row'>
          <article className='w-full grid grid-cols-1 justify-start items-center gap-4 sm:grid-cols-3 md:w-auto'>
            <input
              type='search'
              name='search'
              className='w-full px-4 py-2 text-base text-gray-600 border border-gray-200 rounded-xl focus:outline-none focus:border-blue'
              placeholder='Buscar...'
            />
            <select className='px-4 py-2 text-base text-gray-600 bg-transparent border border-gray-200 rounded-xl focus:outline-none focus:border-blue'>
              <option value='Aerolinea'>Aerolinea</option>
            </select>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => { setStartDate(date) }}
              showIcon={true}
              className='w-full px-4 py-2 text-base text-gray-600 border border-gray-200 rounded-xl focus:outline-none focus:border-blue'
            />
          </article>
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
              headers={['#', 'Nombre completo', 'Tipo de documento', 'N° documento', 'Celular', 'Número de adultos', 'Número de niños', 'Aerolínea', 'Fecha ida', 'Fecha vuelta', 'Tipo', 'Escalas', 'Vuelos', 'Acciones']}
              rowCellStyles='bg-blue text-white px-2 py-2 whitespace-nowrap'
            />
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className='text-sm'>
                  <td>{index + 1}</td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    Yoel Valverde Polo
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    DNI
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    12345678
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    999 999 999
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    2
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    0
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    VIVA AIR
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    20/04/2023
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    -
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    Directo
                  </td>
                  <td className='whitespace-nowrap px-4 py-2'>
                    -
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
  )
}

export default AdminFlights
