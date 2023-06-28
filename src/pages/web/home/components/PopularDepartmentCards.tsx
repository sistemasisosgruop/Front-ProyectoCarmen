import { useLang } from '@hooks/useLang'
import Card from '@components/Card'
import { API_URL } from '@utils/consts'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Department } from 'types/department'
import { AiFillStar } from 'react-icons/ai'

function PopularDepartmentCards() {
  const [departments, setDepartments] = useState<Department[]>([])
  const { t } = useLang()

  useEffect(() => {
    const abortController = new AbortController()

    getDepartments(abortController)

    return () => abortController.abort()
  }, [])

  const getDepartments = async (abortController: AbortController) => {
    await axios
      .get(`${API_URL}/rooms`, {
        signal: abortController.signal
      })
      .then(response => {
        setDepartments(response.data?.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <section className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 xl:grid-cols-4">
      {departments.slice(0, 4).map((department, index) => (
        <Link
          key={index}
          to={`/departamento/${department.roomType.toLowerCase().split(' ').join('-')}/${department.id}`}
          className="w-full h-full inline-block"
        >
          <Card
            imagePath={department.roomImages[0]?.imageUrl}
            imageAlt={`Popular room ${index + 1}`}
          >
            <div className="flex justify-between items-start">
              <span className="uppercase text-sm text-gray-600">Alojamiento</span>
              <p className="text-lg font-bold text-dark">
                desde ${department.price} / <span className="text-gray-600">día</span>
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-2xl text-dark font-bold">{department.roomType}</p>
              <article className="flex justify-start items-center gap-2">
                <div className="flex justify-start items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <AiFillStar key={index} size={18} className="text-orange" />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({t('general.num_reviews', { numReviews: '10' })})
                </span>
              </article>
            </div>
          </Card>
        </Link>
      ))}
    </section>
  )
}

export default PopularDepartmentCards
