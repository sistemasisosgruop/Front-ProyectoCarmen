import { AiFillStar } from 'react-icons/ai'

const RoomCard = (): JSX.Element => {
  return (
    <div className='bg-white rounded-md overflow-hidden flex flex-col w-full'>
      <img
        src='/images/popular-rooms/01.jpg'
        alt='habitaciones'
        className=''
      />
      <div className='px-4 py-2'>
        <article>
          <div className='flex justify-between items-center'>
            <p className='uppercase text-[10px] text-gray-600'>
              Alojamiento
            </p>
            <p className='flex justify-start items-center gap-1'>
              <span>
                $
              </span>
              <strong className='font-bold text-lg'>
                45
              </strong>
              <span className='text-gray-600'>
                / dia
              </span>
            </p>
          </div>
          <h5 className='text-xl font-bold text-dark'>
            Habitacion matrimonial
          </h5>
        </article>
        <hr className='border-b border-b-gray-200 my-4' />
        <article className='text-orange flex justify-start items-center gap-1'>
          <div className='flex justify-start items-center gap-1'>
            <AiFillStar size={24} />
            <AiFillStar size={24} />
            <AiFillStar size={24} />
            <AiFillStar size={24} />
            <AiFillStar size={24} />
          </div>
          <p className='text-gray-600'>
            (10 reseñas)
          </p>
        </article>
      </div>
    </div>
  )
}

export default RoomCard
