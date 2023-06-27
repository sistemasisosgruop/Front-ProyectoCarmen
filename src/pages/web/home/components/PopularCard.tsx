import { Link } from 'react-router-dom'
import { useLang } from '@hooks/useLang'
import Card from '@components/Card'
import { AiFillStar } from 'react-icons/ai'
import { Department } from 'types/department'

interface Props {
  href: string
  imagePath: string
  imageAlt: string
  department: Department
}

function PopularCard({ href, imagePath, imageAlt, department }: Props) {
  const { t } = useLang()

  return (
    <Link to={href} className="w-full h-full inline-block">
      <Card imagePath={imagePath} imageAlt={imageAlt}>
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
  )
}

export default PopularCard
