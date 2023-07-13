import { TourResponse } from 'types/tour'
import { useState } from 'react'
import { useCreateTours } from '../hooks/useCreateTours'
import { useGetRequest } from '@hooks/useGetRequest'
import THead from '@components/THead'
import TourItem from './TourItem'
import camelcaseKeys from 'camelcase-keys'

function Tours() {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const createModal = useCreateTours()
  const { data, isLoading } = useGetRequest<TourResponse>({
    url: 'tours',
    pageNumber,
    modal: createModal
  })

  return (
    <div>
      <div className="overflow-x-scroll rounded-md">
        {isLoading && (
          <p className="text-xl text-center">Cargando los recursos...</p>
        )}
        {!isLoading && (
          <table className="w-full">
            <THead
              headers={[
                '#',
                'Nombre del tour',
                'Descripción del tour',
                'Extras',
                'Ubicación',
                'Duración',
                'Dificultad',
                'Idiomas',
                'N° personas',
                'Edades',
                'Información',
                'Detalles',
                'Acciones'
              ]}
              rowCellStyles="bg-blue text-white px-2 py-2 whitespace-nowrap"
            />
            <tbody>
              {data.map((tour, index) => (
                <TourItem
                  key={tour.id}
                  index={index}
                  tour={camelcaseKeys(tour)}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-4 flex justify-end items-center">
        {/* <Paginate counter={departments.totalPages} setCounter={setPageNumber} /> */}
      </div>
    </div>
  )
}

export default Tours
