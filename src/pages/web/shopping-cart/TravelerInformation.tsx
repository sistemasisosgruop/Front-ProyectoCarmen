import { useNavigate } from 'react-router-dom'
import { useTabs } from '@hooks/useTabs'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import Tabs from '@components/Tabs'
import TabItem from '@components/TabItem'
import Button from '@components/Button'
import OrderSummary from '@components/shopping-cart/OrderSummary'
import MainUserForm from '@components/shopping-cart/MainUserForm'
import SecondaryUserForm from '@components/shopping-cart/SecondaryUserForm'
import { IoReturnDownBack } from 'react-icons/io5'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlinePayment } from 'react-icons/md'
import PaymentForm from '@components/shopping-cart/PaymentForm'
import PurchaseTerms from '@components/shopping-cart/PurchaseTerms'

function TravelerInformation() {
  const { activeTab, switchTab } = useTabs(0)
  const navigate = useNavigate()

  return (
    <LayoutPage title="Mi carrito de compras">
      <section className="py-8 flex justify-end items-center px-8">
        <button
          onClick={() => {
            navigate(-1)
          }}
          className="flex justify-center items-center gap-2 uppercase text-dark "
        >
          <span>Seguir comprando</span>
          <IoReturnDownBack size={24} className="text-turquoise" />
        </button>
      </section>

      <hr className="border-none bg-gray-200 py-[0.5px]" />

      <Section className="py-16">
        <button
          type="button"
          onClick={() => {
            navigate(-1)
          }}
          className="bg-blue px-6 py-2 text-white rounded-xl flex justify-center items-center gap-2 mb-8"
        >
          <HiOutlineArrowSmLeft size={18} />
          <span>Volver</span>
        </button>

        <Tabs
          tabContainerStyles="w-full bg-white rounded-full overflow-hidden grid grid-cols-2"
          tabStyle="w-full h-full py-2 px-4 text-base font-bold lg:py-4 lg:text-xl"
          activeTabStyle="bg-blue rounded-full text-white"
          inactiveTabStyle="bg-white text-blue"
          contentContainerStyles="mt-8"
          activeTab={activeTab}
          switchTab={switchTab}
        >
          <TabItem label="Información personal" icon={<AiOutlineInfoCircle size={18} />}>
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              <div className="bg-white rounded-xl py-8 px-4 md:px-8 lg:col-span-3">
                <MainUserForm />
              </div>
              <div className="bg-white rounded-xl p-4 row-start-1 lg:row-start-auto lg:col-span-2">
                <OrderSummary />
              </div>
              <div className="bg-white rounded-xl py-8 px-4 md:px-8 lg:col-span-5">
                <SecondaryUserForm />
              </div>
              <div className="w-full flex justify-end items-center lg:col-span-5">
                <Button text="Confirmar datos" background="bg-blue" onClick={() => switchTab(1)} />
              </div>
            </section>
          </TabItem>
          <TabItem label="Realizar pago" icon={<MdOutlinePayment size={18} />}>
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              <div className="bg-white rounded-xl py-8 px-4 md:px-8 lg:col-span-3">
                <PaymentForm />
              </div>
              <div className="bg-white rounded-xl p-4 row-start-1 lg:row-start-auto lg:col-span-2">
                <OrderSummary />
              </div>
              <div className="bg-white rounded-xl py-8 px-4 md:px-8 lg:col-span-5">
                <PurchaseTerms />
              </div>
              <div className="w-full flex justify-center items-center col-span-1 lg:col-span-5">
                <Button
                  text="Confirmar pago"
                  background="bg-blue"
                  onClick={() => switchTab(2)}
                  showIcon={true}
                  icon={<MdOutlinePayment size={18} />}
                  extraClasses="uppercase"
                />
              </div>
            </section>
          </TabItem>
        </Tabs>
      </Section>
    </LayoutPage>
  )
}

export default TravelerInformation
