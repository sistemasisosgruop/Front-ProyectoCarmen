import { useLang } from '@hooks/useLang'
import LayoutPage from '@components/layouts/LayoutPage'
import Section from '@components/layouts/Section'
import Masthead from '@components/Masthead'
import Heading from '@components/Heading'
import PromotionCard from '@components/rooms/PromotionCard'
import PopularRoomCard from '@components/rooms/PopularRoomCard'
import ButtonLink from '@components/ButtonLink'
import FullApartmentCard from '@components/rooms/FullApartmentCard'
import ButtonLinkSm from '@components/ButtonLinkSm'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

console.log('Rooms')

const Rooms = () => {
  const { t } = useLang()

  return (
    <LayoutPage title="Las mejores habitaciones">
      <Masthead />

      <Section className="pt-32">
        <Heading title={t('pages.rooms.promotions')} description={t('pages.rooms.promotion_description')} />
        <section className="grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <PromotionCard
              key={index}
              href="/"
              imagePath="https://eraseunhotel.com/wp-content/uploads/2017/12/4-grande-1.jpg"
              imageAlt={`image popular room ${index + 1}`}
            />
          ))}
        </section>
      </Section>

      <Section className="pt-32">
        <Heading
          title={t('pages.rooms.the_most_popular')}
          description={t('pages.rooms.description_the_most_popular')}
          textAlign="text-left"
        />
        <section className="grid grid-cols-12 lg:row-span-2 gap-4 pb-8">
          {[...Array(5)].map((_, index) => (
            <PopularRoomCard
              key={index}
              index={index}
              imagePath="https://houseandhome.com/wp-content/uploads/2018/01/Cropped_Best_Living_Rooms_2017_23.jpg"
              alt={`The most popular room ${index + 1}`}
            />
          ))}
        </section>
      </Section>

      <Section className="pt-32">
        <Heading
          title={t('pages.rooms.full_apartment')}
          description={t('pages.rooms.description_full_apartment')}
          textAlign="text-left"
        />
        <section className="grid grid-cols-6 grid-rows-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <FullApartmentCard
              key={index}
              href="/habitaciones/detalle"
              index={index}
              imagePath="http://www.laguiadelvaron.com/wp-content/uploads/2015/09/Los-mejores-20-departamentos-para-un-soltero-18.jpg"
              imageAlt={`departamento completo ${index + 1}`}
            />
          ))}
        </section>
      </Section>

      <Section className="py-32">
        <h2 className="text-4xl font-bold text-dark mb-4">Buscar por tipo de habitacion</h2>
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-white">
              <img
                src="https://i.pinimg.com/originals/8a/58/20/8a58209121f6c945dcc79a4c9bb81a0d.jpg"
                alt={`Room ${index + 1}`}
                className=""
              />
              <article className="px-4 py-4 space-y-2">
                <p className="text-lg font-bold text-dark uppercase">Matrimoniales</p>
                <p className="text-gray-600 underline hover:decoration-wavy">10+ habitaciones</p>

                <ButtonLinkSm to="/catalogo-habitaciones" text={t('general.view_more')} background="bg-orange" />
              </article>
            </div>
          ))}
        </section>
        <div className="my-8 flex justify-center items-center">
          <ButtonLink
            to="/catalogo-habitaciones"
            text={t('general.view_catalog')}
            showIcon={true}
            icon={<HiOutlineArrowSmRight size={18} />}
            iconPosition="right"
          />
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Rooms
