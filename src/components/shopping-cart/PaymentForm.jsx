import { useTabs } from '@hooks/useTabs'
import TabItem from '@components/TabItem'
import Tabs from '@components/Tabs'
import PaymentCreditCardForm from './PaymentCreditCardForm'
import PaymentPaypalCard from './PaymentPaypalCard'

const PaymentForm = () => {
  const { activeTab, switchTab } = useTabs(0)

  return (
    <>
      <h2 className="text-lg font-bold mb-4">Ingresa tus datos</h2>

      <div>
        <p className="text-gray-600 font-bold mb-2">Paga con</p>
        <Tabs
          activeTab={activeTab}
          switchTab={switchTab}
          tabContainerStyles="flex justify-start items-stretch gap-2"
          tabStyle="rounded-xl px-4 py-2 font-bold"
          activeTabStyle="bg-orange text-white"
          inactiveTabStyle="bg-gray-200"
        >
          <TabItem label="Tarjeta de crédito / débito">
            <PaymentCreditCardForm />
          </TabItem>
          <TabItem label="Paypal">
            <PaymentPaypalCard />
          </TabItem>
          {/* <TabItem label='Western Union'>
          </TabItem> */}
        </Tabs>
      </div>
    </>
  )
}

export default PaymentForm
