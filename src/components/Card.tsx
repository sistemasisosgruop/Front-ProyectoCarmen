import { AiFillStar } from 'react-icons/ai'
import '../styles/card.css'

interface Props {
  imagePath: string
  alt: string
}

const Card = ({ imagePath, alt }: Props): JSX.Element => {
  return (
      <div className='relative group/description cursor-pointer transition-all hover:mb-24 card'>
      <img src={imagePath} alt={alt} className='h-[380px] object-cover object-center border border-white rounded-md' />
      <article className='invisible card-description absolute z-50 left-0 px-4 py-4 w-full group-hover/description:visible'>
        <div className='flex justify-between items-start'>
          <span className='uppercase text-sm text-gray-600'>
            Alojamiento
          </span>
          <p className='text-lg font-bold text-dark'>
            desde $45 / <span className='text-gray-600'>día</span>
          </p>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <p className='text-2xl text-dark font-bold'>
            Habitación matrimonial
          </p>
          <div className='flex justify-start items-center gap-2'>
            <p className='flex justify-start items-center gap-1'>
              <AiFillStar size={18} className='text-green' />
              <AiFillStar size={18} className='text-green' />
              <AiFillStar size={18} className='text-green' />
              <AiFillStar size={18} className='text-green' />
              <AiFillStar size={18} className='text-green' />
            </p>
            <span className='text-gray-600'>
              (10 reseñas)
            </span>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card

