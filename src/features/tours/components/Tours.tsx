import { useEffect, useState } from 'react'
import THead from '@components/THead'
import TourItem from './TourItem'
import { Tour } from 'types/tour'
import axios from 'axios'
import { API_URL } from '@utils/consts'
import camelcaseKeys from 'camelcase-keys'
// import Paginate from '@components/Paginate'

function Tours() {
  const [toursResponse, setToursResponse] = useState<Tour[]>([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getTours()
  }, [pageNumber])

  const getTours = async () => {
    await axios
      .get(`${API_URL}/tours?page=${pageNumber}`, {
        headers: {
          Authorization: window.sessionStorage.getItem('token')
        }
      })
      .then(response => {
        setToursResponse(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
      .finally(() => {
        setIsLoading(false)
        console.log('Finally')
      })
  }

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
              {toursResponse.map((tour, index) => (
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
