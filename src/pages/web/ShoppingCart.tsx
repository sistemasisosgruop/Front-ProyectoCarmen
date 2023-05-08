import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'

const ShoppingCart = (): JSX.Element => {
  return (
    <LayoutPage title='Mi carrito de compras'>
      <Section>
        <h1 className='text-4xl text-center text-dark font-bold'>
          Carrito de compras
        </h1>
      </Section>
    </LayoutPage>
  )
}

export default ShoppingCart
