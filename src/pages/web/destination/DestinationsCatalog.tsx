import { Link } from 'react-router-dom'
import LayoutPage from '../../../components/layouts/LayoutPage'
import Section from '../../../components/layouts/Section'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import HorizontalCard from '../../../components/HorizontalCard'

const DestinationsCatalog = (): JSX.Element => {
  return (
    <LayoutPage title='Vuelos populares - Carmen Agencia de Viajes y Turismo'>
      <Section className='py-8'>
        <Link
          to='/'
          className='bg-blue text-white px-6 py-1 rounded-md inline-flex justify-center items-center gap-1'
        >
          <HiOutlineArrowSmLeft size={18} />
          <span>
            Volver
          </span>
        </Link>
      </Section>

      <Section className='mb-32'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
        <div className='flex justify-center items-center mt-4'>
          <Link to='/ver-mas' className='flex justify-center items-center gap-2 text-dark text-xl uppercase font-bold'>
            <span>Ver mas</span>
            <IoIosAddCircleOutline size={32} className='text-dark' />
          </Link>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default DestinationsCatalog
