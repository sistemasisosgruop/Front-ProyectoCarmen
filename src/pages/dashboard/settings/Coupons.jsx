import { useModal } from '@hooks/useModal'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import Modal from '@components/Modal'
import Heading from '@components/Heading'
import Button from '@components/Button'
import AddCoupon from '@components/coupons/AddCoupon'
import CouponList from '@components/coupons/CouponList'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

const Coupons = () => {
  const { isOpenModal, openModal, closeModal } = useModal()

  return (
    <>
      <AdminLayout title="Registro de cupones">
        <Heading title="Cupones" />

        <AdminSection>
          <article className="flex flex-col justify-between items-end gap-4 mb-8 sm:flex-row">
            <div className="w-full relative">
              <label
                htmlFor="searchClient"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600"
              >
                <AiOutlineSearch size={18} />
              </label>
              <input
                type="search"
                name="searchClient"
                placeholder="Buscar cupones..."
                className="w-full pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue sm:w-auto"
              />
            </div>

            <Button
              text="Agregar"
              onClick={openModal}
              background="bg-orange"
              showIcon={true}
              icon={<IoMdAdd size={18} />}
            />
          </article>

          <CouponList isOpenModal={isOpenModal} />
        </AdminSection>
      </AdminLayout>

      {isOpenModal && (
        <Modal title="Crear cupón" closeModal={closeModal}>
          <AddCoupon closeModal={closeModal} />
        </Modal>
      )}
    </>
  )
}

export default Coupons
