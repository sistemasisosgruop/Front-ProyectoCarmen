import { Link } from 'react-router-dom'
import CardHover from './CardHover'
import { AiFillStar } from 'react-icons/ai'

interface Props {
  href: string
  imagePath: string
  imageAlt: string
}

function Carding({ href, imagePath, imageAlt }: Props) {
  return (
    <Link to={href}>
      <CardHover imagePath={imagePath} imageAlt={imageAlt}>
        <div className="flex justify-between items-start">
          <span className="uppercase text-sm text-gray-600">Alojamiento</span>
          <p className="text-lg font-bold text-dark">
            desde $45 / <span className="text-gray-600">día</span>
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-2xl text-dark font-bold">Habitación matrimonial</p>
          <div className="flex justify-start items-center gap-2">
            <p className="flex justify-start items-center gap-1">
              <AiFillStar size={18} className="text-green" />
              <AiFillStar size={18} className="text-green" />
              <AiFillStar size={18} className="text-green" />
              <AiFillStar size={18} className="text-green" />
              <AiFillStar size={18} className="text-green" />
            </p>
            <span className="text-gray-600">(10 reseñas)</span>
          </div>
        </div>
      </CardHover>
    </Link>
  )
}

export default Carding
