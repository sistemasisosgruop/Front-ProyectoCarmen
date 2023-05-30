import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import SliderDetail from '@components/destinations/SliderDetail'
import DestinationForm from '@components/destinations/DestinationForm'
import TourDetails from '@components/destinations/TourDetails'
import Related from '@components/destinations/Related'
import CommentSection from '@components/comments/CommentSection'
import { AiFillDashboard, AiFillStar } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {
  HiOutlineIdentification,
  HiUsers,
  HiOutlineLanguage
} from 'react-icons/hi2'
import { CgSandClock } from 'react-icons/cg'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'

const title: string = 'Valle sagrado de los Incas'

const DestinationDetail = (): JSX.Element => {
  const { t } = useLang()

  return (
    <LayoutPage title="Detalles de destino populares">
      <SliderDetail />

      <Section className="my-4 mb-32">
        <div className="flex justify-start items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} size={18} />
          ))}
          <span>({t('general.opinnions', { opinnions: 12 })})</span>
        </div>
      </Section>

      <Section>
        <div>
          <h2 className="uppercase text-[2.5rem] text-center text-dark font-bold">
            <span className="text-blue mr-2">
              {title.split(' ').slice(0, 2).join(' ')}
            </span>
            <span>{title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-dark text-center text-2xl">
            Explora Cusco a los mejores precios
          </p>
        </div>
      </Section>

      <Section className="my-16 mx-52">
        <p className="text-dark text-center text-2xl">
          El servicio es personalizado con atencion inmediata, con valores de
          protecci&oacute;n al viajero, y complementado el d&iacute;a con un
          buen bueffet e ingresos a diferentes lugares como Pisac,
          Ollantaytambo, Chicvhero, entre otros.
        </p>
      </Section>

      <Section className="mx-32">
        <hr />
        <div className="grid grid-cols-3 gap-4 my-16">
          <p className="text-dark text-lg flex justify-start items-center gap-1">
            <FaMapMarkerAlt size={20} className="text-turquoise" />
            <span>Valle sagrado</span>
          </p>
          <p className="text-dark text-lg flex justify-start items-center gap-1">
            <AiFillDashboard size={20} className="text-turquoise" />
            <span>Dificultad baja</span>
          </p>
          <p className="text-dark text-lg flex justify-start items-center gap-1">
            <HiUsers size={20} className="text-turquoise" />
            <span>M&aacute;ximo 15 personas por grupo</span>
          </p>
          <p className="text-dark text-lg flex justify-start items-center gap-1">
            <CgSandClock size={20} className="text-turquoise" />
            <span>8 horas</span>
          </p>
          <p className="text-dark text-lg flex justify-start items-center gap-1">
            <HiOutlineLanguage size={20} className="text-turquoise" />
            <span>Español, Ingl&eacute;s y Portugu&eacute;s</span>
          </p>
          <p className="text-dark text-lg flex justify-start items-center gap-1">
            <HiOutlineIdentification size={20} className="text-turquoise" />
            <span>De 1 a 75 años</span>
          </p>
        </div>
        <hr />
      </Section>

      <Section className="my-16 mx-32 grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <article className="mb-8">
            <h2 className="text-xl text-dark font-bold">
              <span className="border-l-2 border-l-dark mr-2"></span>
              <span>Qu&eacute; har&aacute;s:</span>
            </h2>
            <p className="text-xl ml-4 text-dark font-normal">
              consequat ac felis donec et odio pellentesque diam volutpat
              commodo sed egestas egestas fringilla phasellus faucibus
              scelerisque eleifend donec pretium vulputate sapien nec sagittis
              aliquam malesuada bibendum arcu vitae elementum curabitur vitae
              nunc sed velit dignissim sodales ut eu sem
            </p>
          </article>
          <article className="mb-16">
            <h2 className="text-xl text-dark font-bold">
              <span className="border-l-2 border-l-dark mr-2"></span>
              <span>Buena elecci&oacute;n para:</span>
            </h2>
            <p className="text-xl ml-4 text-dark font-normal">
              El Tour de Valle Sagrado de los Incas es una gran opci&oacute;n
              para las personas que quieren disfrutar de la belleza de este
              maravillo para&iacute;so andino.
            </p>
          </article>
          <article>
            <h2 className="text-xl text-dark font-bold">
              <span className="border-l-2 border-l-dark mr-2"></span>
              <span>Pol&iacute;tica de cancelaci&oacute;n:</span>
            </h2>
            <p className="text-xl ml-4 text-dark font-normal">
              Para obtener un reembolso total, debes cancelar al menos 24 horas
              antes del comienzo de la experiencia.
            </p>
          </article>
        </div>

        <DestinationForm />
      </Section>

      <Section>
        <h2 className="uppercase text-blue text-center text-[3rem] font-bold">
          Detalles del Tour
        </h2>
        <p className="text-center text-2xl text-dark">
          Informaci&oacute;n importante a tener en cuenta
        </p>

        <hr className="w-96 border-b-2 border-b-gray-600 mx-auto" />

        <div className="my-16">
          <TourDetails />
        </div>
      </Section>

      <CommentSection />

      <Section className="mt-16 mb-32">
        <div className="w-full flex flex-col justify-between items-start mb-4 sm:flex-row sm:items-center">
          <div className="mb-8">
            <h2 className="text-4xl text-dark font-bold">Lo mas relacionado</h2>
            <p className="text-dark text-xl">
              No te pierdas nuestras promociones por esta temporada
            </p>
          </div>
          <div className="flex justify-end items-center gap-4 sm:justify-center">
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
            <Related key={index} index={index} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            type="button"
            className="bg-blue rounded-xl px-6 py-1 text-white font-bold flex justify-center items-center gap-2 hover:bg-opacity-80"
          >
            <span>Ver mas</span>
            <HiOutlineArrowSmRight size={20} />
          </button>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default DestinationDetail
