import { Link } from 'react-router-dom'
import { FiMapPin } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'
import { HiUsers } from 'react-icons/hi'

const HorizontalCard = (): JSX.Element => {
    return (
    <Link to='/destinos-populares/detalle' className='inline-block rounded-md overflow-hidden bg-white border border-white'>
      <div className='flex'>
        <img
          src='https://www.machupicchu-tours-peru.com/wp-content/uploads/2014/01/MachuPic-1.jpg'
          alt='camino del inka'
          className='min-h-[256px] h-[256px] w-[320px] object-cover object-center'
        />
        <article className='px-16 py-4 flex flex-col w-full'>
          <div className='flex justify-end items-start'>
            ***** (12)
          </div>
          <p className='uppercase text-blue text-lg'>
            Tour full day
          </p>
          <h2 className='text-dark text-2xl font-bold'>
            Camino Inca a Macchu Picchu - Inka Trail 104km
          </h2>
          <div className='flex justify-between items-end mt-8'>
            <div className='flex flex-col justify-start items-start gap-2'>
              <p className='flex justify-start items-center gap-2 text-dark'>
                <FiMapPin size={24} className='text-blue' />
                <span>
                  Wiñayhuayna - Macchu Picchu
                </span>
              </p>
              <p className='flex justify-start items-center gap-2 text-dark'>
                <BiTimeFive size={24} className='text-blue' />
                <span>
                  2 dias / 1 noche
                </span>
              </p>
              <p className='flex justify-start items-center gap-2 text-dark'>
                <HiUsers size={24} className='text-blue' />
                Hasta 12 personas
              </p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <p className='flex flex-col justify-start items-center'>
                <strong className='text-lg font-bold'>
                  <span className='text-blue'>S/ </span>
                  <span>1,772.00</span>
                </strong>
                <span>
                  por persona
                </span>
              </p>
              <button
                type='button'
                className='bg-turquoise text-white font-bold rounded-md px-6 py-1'
              >
                Comprar
              </button>
            </div>
          </div>
        </article>
      </div>
    </Link>
  )
}

export default HorizontalCard
