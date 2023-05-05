import { AiFillStar } from 'react-icons/ai'

interface Props {
  imagePath: string
  alt: string
}

const Card = ({ imagePath, alt }: Props): JSX.Element => {
  return (
    <div className='relative w-full rounded-xl border border-white group/description cursor-pointer transition-all overflow-hidden'>
      <img
        src={imagePath}
        alt={alt}
        className='w-full h-[380px] object-cover object-center group-hover/description:scale-125 duration-200'
      />
      <div className='invisible absolute top-2 right-2 bg-white px-2 py-1 rounded-xl group-hover/description:visible'>
        <p className='text-dark font-bold'>5.0</p>
      </div>

      <article className='md:invisible absolute z-20 bg-white bottom-0 left-0 px-4 py-4 w-full md:group-hover/description:visible rounded-b-md'>
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
