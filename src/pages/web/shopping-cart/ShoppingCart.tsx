import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import Heading from '@components/Heading'
import Products from '@components/shopping-cart/Products'
import MyFormInput from '@forms/FormInput'
import Button from '@components/Button'
import ButtonLink from '@components/ButtonLink'
import { IoReturnDownBack } from 'react-icons/io5'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { MdOutlinePayment } from 'react-icons/md'

const ShoppingCart = (): JSX.Element => {
  const {
    register,
    formState: { errors }
  } = useForm()
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
          className="bg-turquoise px-6 py-2 text-white rounded-xl flex justify-center items-center gap-2 mb-8"
        >
          <HiOutlineArrowSmLeft size={18} />
          <span>Volver</span>
        </button>

        <Heading title="Confirmar y pagar" textAlign="text-start" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="col-span-2">
            <header className="w-full bg-white px-6 py-2 rounded-xl mb-2">
              <p className="text-dark font-bold">
                Resumen del pedido&nbsp;
                <span>({'2'})</span>
              </p>
              <label
                htmlFor="all"
                className="flex justify-start items-center gap-2"
              >
                <input
                  type="checkbox"
                  name="all"
                  className="checked:bg-turquoise"
                />
                <span>Todo</span>
              </label>
            </header>

            <div className="w-full bg-white rounded-xl p-4">
              <p className="uppercase text-xs font-bold mb-2">Hospedaje</p>

              <Products />
            </div>
          </div>

          <section className="w-full flex flex-col gap-8">
            <div className="bg-white rounded-xl p-4">
              <header className="mb-4">
                <h3 className="text-dark text-lg text-center font-bold mb-4">
                  Resumen del pedido
                </h3>
                <p className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$ 1000.00</span>
                </p>
              </header>
              <article>
                <div className="flex flex-col justify-center items-end gap-4 sm:flex-row">
                  <MyFormInput
                    name="coupon"
                    label="Código de cupón"
                    register={register}
                    rules={{ required: true }}
                    errors={errors}
                  />
                  <Button text="Hecho" />
                </div>

                <p className="flex justify-between items-center gap-4 mt-6 mb-1 mx-2">
                  <span className="text-dark text-sm font-bold uppercase">
                    Total
                  </span>
                  <span className="text-gray-600">$ 900.00</span>
                </p>

                <ButtonLink
                  to="/carrito-de-compras/confirmar-datos"
                  text="Pagar"
                  showIcon={true}
                  icon={<MdOutlinePayment size={18} />}
                  iconPosition="right"
                  background="bg-orange"
                />
              </article>
            </div>

            <div>
              <h3 className="text-dark text-center text-xl font-bold mb-4">
                Método de pago aceptados
              </h3>
              <article className="w-full flex justify-between items-center gap-4">
                <img
                  src="/images/icons/visa.png"
                  alt="visa logo"
                  className="w-full h-16 object-contain object-center"
                />
                <img
                  src="/images/icons/paypal.png"
                  alt="paypal logo"
                  className="w-full h-16 object-contain object-center"
                />
                <img
                  src="/images/icons/western-union.png"
                  alt="western union logo"
                  className="w-full h-16 object-contain object-center"
                />
              </article>
            </div>
          </section>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default ShoppingCart
