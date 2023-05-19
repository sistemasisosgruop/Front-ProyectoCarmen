import { useNavigate } from 'react-router-dom'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import Tabs from '@components/Tabs'
import TabItem from '@components/TabItem'
import OrderSummary from '@components/shopping-cart/OrderSummary'
import MainUserForm from '@components/shopping-cart/MainUserForm'
import SecondaryUserForm from '@components/shopping-cart/SecondaryUserForm'
import { IoReturnDownBack } from 'react-icons/io5'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlinePayment } from 'react-icons/md'
import ButtonLink from '@components/ButtonLink'

const TravelerInformation = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <LayoutPage title='Mi carrito de compras'>
      <section className='py-8 flex justify-end items-center px-8'>
        <button
          onClick={() => { navigate(-1) }}
          className='flex justify-center items-center gap-2 uppercase text-dark '
        >
          <span>
            Seguir comprando
          </span>
          <IoReturnDownBack size={24} className='text-turquoise' />
        </button>
      </section>

      <hr className='border-none bg-gray-200 py-[0.5px]' />

      <Section className='py-16'>
        <button
          type='button'
          onClick={() => { navigate(-1) }}
          className='bg-blue px-6 py-2 text-white rounded-xl flex justify-center items-center gap-2 mb-8'
        >
          <HiOutlineArrowSmLeft size={18} />
          <span>
            Volver
          </span>
        </button>

        <Tabs
          tabContainerStyles='w-full bg-white rounded-full overflow-hidden flex justify-between items-center'
          tabStyle='w-full py-2 text-base font-bold lg:py-4 lg:text-xl'
          activeTabStyle='bg-blue rounded-full text-white'
          inactiveTabStyle='bg-white text-blue'
          contentContainerStyles='mt-8'
        >
          <TabItem
            label='Información personal'
            icon={<AiOutlineInfoCircle size={18} />}
          >
            <section className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              <div className='bg-white rounded-xl p-4 lg:col-span-2'>
                <MainUserForm />
              </div>
              <div className='bg-white rounded-xl p-4 row-start-1 lg:row-start-auto lg:col-span-1'>
                <OrderSummary />
              </div>
              <div className='bg-white rounded-xl p-4 lg:col-span-3'>
                <SecondaryUserForm />
              </div>
              <div>
                <ButtonLink
                  to=''
                  text='Confirmar datos'
                  background='bg-blue'
                />
              </div>
            </section>
          </TabItem>
          <TabItem
            label='Realizar pago'
            icon={<MdOutlinePayment size={18} />}
          >
            <h2>
              Realizar pago
            </h2>
          </TabItem>
        </Tabs>
      </Section>
    </LayoutPage>
  )
}

export default TravelerInformation