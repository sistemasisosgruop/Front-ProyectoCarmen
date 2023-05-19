import { useNavigate } from 'react-router-dom'
import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'

const RoomDetail = (): JSX.Element => {
  const { t } = useLang()
  const navigate = useNavigate()

  return (
    <LayoutPage title='Detalle de habitación'>
      <Section className='py-16'>
        <button
          type='button'
          onClick={() => { navigate(-1) }}
          className='bg-blue px-6 py-2 text-white rounded-xl flex justify-center items-center gap-2 mb-8'
        >
          <HiOutlineArrowSmLeft size={18} />
          <span>
            {t('general.back')}
          </span>
        </button>
      </Section>

      <Section>
        <h1 className='text-4xl text-start text-dark font-bold mb-2'>
          Departamento completo
        </h1>
        <div className='flex justify-start items-center gap-2'>
          <p className='flex justify-start items-center gap-2'>
            <AiFillStar size={22} className='text-orange' />
            <span className='font-bold'>{'4.5'}</span>
          </p>
          <p className='text-gray-600'>
            ({'10'} reseñas)
          </p>
          <p className='underline'>
            Aguas calientes, Cusco, Perú
          </p>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default RoomDetail
