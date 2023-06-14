import { Link } from 'react-router-dom'
import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import Heading from '@components/Heading'
import Masthead from '@components/Masthead'
import CardHover from '@components/CardHover'
import ButtonLinkSm from '@components/ButtonLinkSm'
import PromotionCard from '@components/tourist-packages/PromotionCard'
import ButtonLink from '@components/ButtonLink'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import PackagesDestinationCard from '@components/tourist-packages/PackagesDestinationCard'

const Packages = () => {
  const { t } = useLang()

  return (
    <LayoutPage title="Paquetes turisticos - Carmen Agencia de Viajes y Turismo">
      <Masthead />

      <Section className="mt-32">
        <Heading
          title={t('pages.packages.search_packages')}
          description={t('pages.packages.description_search_packages')}
        />
        <section className="grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <PackagesDestinationCard
              key={index}
              href="/"
              imagePath="https://elcomercio.pe/resizer/kPYiMdRvQaOmdMYQvDjsIOVaO_k=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6GW5P5E755BVHMKENSDZKMGOPU.jpg"
              imageAlt={`images destination ${index + 1}`}
            />
          ))}
        </section>
      </Section>

      <Section className="mt-32">
        <Heading
          title={t('pages.packages.promotions')}
          description={t('pages.packages.description_promotion')}
          textAlign="text-left"
        />
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <PromotionCard
              key={index}
              imagePath="https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/09/turismo-no-peru-machu-pichu.jpg"
              alt={`image promotion packages ${index + 1}`}
            />
          ))}
        </div>
      </Section>

      <Section className="my-32">
        <div className="flex justify-between items-center mb-4">
          <div className="mb-8">
            <h2 className="text-4xl text-dark font-bold">Lo mas popular</h2>
            <p className="text-dark text-xl">
              No te pierdas nuestras promociones por esta temporada
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <HiOutlineArrowSmLeft
              size={24}
              className="w-10 h-10 rounded-full bg-transparent border border-gray-600 text-dark flex justify-center items-center"
            />
            <HiOutlineArrowSmRight
              size={24}
              className="w-10 h-10 rounded-full bg-turquoise border border-turquoise text-white flex justify-center items-center"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <PromotionCard
              key={index}
              imagePath="https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/09/turismo-no-peru-machu-pichu.jpg"
              alt={`image promotion packages ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-8">
          <ButtonLink
            to="/"
            text={t('general.view_more')}
            showIcon={true}
            icon={<HiOutlineArrowSmRight size={20} />}
            iconPosition="right"
          />
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Packages
