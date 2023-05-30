import { useNavigate } from 'react-router-dom'
import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import GridImages from '@components/rooms/GridImages'
import RoomDescriptionInDetail from '@components/rooms/RoomDescriptionInDetail'
import PaymentDetailForm from '@components/rooms/PaymentDetailForm'
import CommentSection from '@components/comments/CommentSection'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'

const RoomDetail = (): JSX.Element => {
  const { t } = useLang()
  const navigate = useNavigate()

  return (
    <LayoutPage title="Detalle de habitación">
      <Section className="py-16">
        <button
          type="button"
          onClick={() => {
            navigate(-1)
          }}
          className="bg-blue px-6 py-2 text-white rounded-xl flex justify-center items-center gap-2 mb-8"
        >
          <HiOutlineArrowSmLeft size={18} />
          <span>{t('general.back')}</span>
        </button>
      </Section>

      <Section>
        <h1 className="text-4xl text-start text-dark font-bold mb-2">
          Departamento completo
        </h1>
        <div className="flex justify-start items-center gap-2">
          <p className="flex justify-start items-center gap-2">
            <AiFillStar size={22} className="text-orange" />
            <span className="font-bold">{'4.5'}</span>
          </p>
          <p className="text-gray-600">
            ({'10'} {t('general.reviews')})
          </p>
          <p className="underline">Aguas calientes, Cusco, Perú</p>
        </div>
      </Section>
      <Section className="my-8">
        <GridImages
          images={[
            {
              path: 'https://www.construyehogar.com/wp-content/uploads/2014/08/Dise%C3%B1o-de-departamento-peque%C3%B1o-r%C3%BAstico.jpg',
              alt: 'image'
            },
            {
              path: 'https://www.construyehogar.com/wp-content/uploads/2014/08/Dise%C3%B1o-de-departamento-peque%C3%B1o-r%C3%BAstico.jpg',
              alt: 'image'
            },
            {
              path: 'https://www.construyehogar.com/wp-content/uploads/2014/08/Dise%C3%B1o-de-departamento-peque%C3%B1o-r%C3%BAstico.jpg',
              alt: 'image'
            },
            {
              path: 'https://www.construyehogar.com/wp-content/uploads/2014/08/Dise%C3%B1o-de-departamento-peque%C3%B1o-r%C3%BAstico.jpg',
              alt: 'image'
            }
          ]}
        />
      </Section>
      <Section className="grid grid-cols-1 gap-8 mb-4 md:grid-cols-3">
        <div className="md:col-span-2 mb-8 lg:mb-0">
          <RoomDescriptionInDetail />
        </div>

        <div className="bg-white rounded-xl p-4 md:col-span-1">
          <PaymentDetailForm />
        </div>
      </Section>

      <CommentSection />
    </LayoutPage>
  )
}

export default RoomDetail
