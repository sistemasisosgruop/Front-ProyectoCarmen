import LayoutPage from '../../../components/layouts/layout-page'
import Section from '../../../components/layouts/section'
import SliderDetail from '../../../components/destinations-catalog/slider-detail'
import DestinationForm from '../../../components/destinations-catalog/destination-form'
import { AiFillDashboard, AiFillStar } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineIdentification, HiUsers, HiOutlineLanguage } from 'react-icons/hi2'
import { CgSandClock } from 'react-icons/cg'

const DestinationDetail = (): JSX.Element => {
  return (
    <LayoutPage title='Detalle'>
      <SliderDetail />

      <Section className='my-4 mb-32'>
        <div className='flex justify-start items-center gap-2'>
          <AiFillStar size={18} />
          <AiFillStar size={18} />
          <AiFillStar size={18} />
          <AiFillStar size={18} />
          <AiFillStar size={18} />
          <span>
            (12 opiniones)
          </span>
        </div>
      </Section>

      <Section>
        <div>
          <h2 className='uppercase text-[2.5rem] text-center text-dark font-bold'>
            <span className='text-blue'>
              Valle sagrado
            </span>
            <span>
              de los incas
            </span>
          </h2>
          <p className='text-dark text-center text-2xl'>
            Explora Cusco a los mejores precios
          </p>
        </div>
      </Section>

      <Section className='my-16 mx-52'>
        <p className='text-dark text-center text-2xl'>
          El servicio es personalizado con atencion inmediata, con valores de protecci&oacute;n al viajero, y complementado el d&iacute;a con un buen bueffet e ingresos a diferentes lugares como Pisac, Ollantaytambo, Chicvhero, entre otros.
        </p>
      </Section>

      <Section className='mx-32'>
        <hr />
        <div className='grid grid-cols-3 gap-4 my-16'>
          <p className='text-dark text-lg flex justify-start items-center gap-1'>
            <FaMapMarkerAlt size={20} className='text-turquoise' />
            <span>
              Valle sagrado
            </span>
          </p>
          <p className='text-dark text-lg flex justify-start items-center gap-1'>
            <AiFillDashboard size={20} className='text-turquoise' />
            <span>
              Dificultad baja
            </span>
          </p>
          <p className='text-dark text-lg flex justify-start items-center gap-1'>
            <HiUsers size={20} className='text-turquoise' />
            <span>
              M&aacute;ximo 15 personas por grupo
            </span>
          </p>
          <p className='text-dark text-lg flex justify-start items-center gap-1'>
            <CgSandClock size={20} className='text-turquoise' />
            <span>
              8 horas
            </span>
          </p>
          <p className='text-dark text-lg flex justify-start items-center gap-1'>
            <HiOutlineLanguage size={20} className='text-turquoise' />
            <span>
              Español, Ingl&eacute;s y Portugu&eacute;s
            </span>
          </p>
          <p className='text-dark text-lg flex justify-start items-center gap-1'>
            <HiOutlineIdentification size={20} className='text-turquoise' />
            <span>
              De 1 a 75 años
            </span>
          </p>
        </div>
        <hr />
      </Section>

      <Section className='my-16 mx-32 grid grid-cols-5 gap-8'>
        <div className='col-span-3'>
          <article className='mb-8'>
            <h2 className='text-xl text-dark font-bold'>
              <span className='border-l-2 border-l-dark mr-2'></span>
              <span>
                Qu&eacute; har&aacute;s:
              </span>
            </h2>
            <p className='text-xl ml-4 text-dark font-normal'>
              consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem
            </p>
          </article>
          <article className='mb-16'>
            <h2 className='text-xl text-dark font-bold'>
              <span className='border-l-2 border-l-dark mr-2'></span>
              <span>
                Buena elecci&oacute;n para:
              </span>
            </h2>
            <p className='text-xl ml-4 text-dark font-normal'>
              El Tour de Valle Sagrado de los Incas es una gran opci&oacute;n para las personas que quieren disfrutar de la belleza de este maravillo para&iacute;so andino.
            </p>
          </article>
          <article>
            <h2 className='text-xl text-dark font-bold'>
              <span className='border-l-2 border-l-dark mr-2'></span>
              <span>
                Pol&iacute;tica de cancelaci&oacute;n:
              </span>
            </h2>
            <p className='text-xl ml-4 text-dark font-normal'>
              Para obtener un reembolso total, debes cancelar al menos 24 horas antes del comienzo de la experiencia.
            </p>
          </article>
        </div>

        <DestinationForm />
      </Section>

      <Section>
        <h2 className='uppercase text-blue text-center text-[3rem] font-bold'>
          Detalles del Tour
        </h2>
        <p className='text-center text-2xl text-dark'>
          Informaci&oacute;n importante a tener en cuenta
        </p>
        <hr className='w-96 border-b-2 border-b-gray-600 mx-auto' />

        <div className=''>

        </div>
      </Section>
    </LayoutPage>
  )
}

export default DestinationDetail
