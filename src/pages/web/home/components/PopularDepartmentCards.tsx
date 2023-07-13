import { useLang } from '@hooks/useLang'
import { useGetRequest } from '@hooks/useGetRequest'
import Card from '@components/Card'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { formatPrice } from '@utils/formatPrice'

import { type DepartmentResponse } from 'types/department'

function PopularDepartmentCards() {
  const { t } = useLang()
  const { data } = useGetRequest<DepartmentResponse>({ url: 'departments' })

  return (
    <section className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 xl:grid-cols-4">
      {data?.results?.slice(0, 4).map((department, index) => (
        <Link
          key={index}
          to={`/department/${department?.departmentType?.toLowerCase().split(' ').join('-')}/${department?.id}`}
          className="w-full h-full inline-block"
        >
          <Card
            imagePath={department?.Images[0]?.imageUrl ?? ''}
            imageAlt={`Popular room ${index + 1}`}
          >
            <div className="flex justify-between items-start">
              <span className="uppercase text-sm text-gray-600">Alojamiento</span>
              <p className="text-lg font-bold text-dark">
                S/. {formatPrice(department?.price)} / <span className="text-gray-600">día</span>
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-2xl text-dark font-bold">{department?.departmentType}</p>
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
