import LayoutPage from '../../../components/layouts/LayoutPage'
import Section from '../../../components/layouts/Section'
import SliderDetail from '../../../components/destinations-catalog/slider-detail'
import { AiFillStar } from 'react-icons/ai'

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

      <Section className='mt-16 mx-52'>
        <p className='text-dark text-center text-2xl'>
          El servicio es personalizado con atencion inmediata, con valores de protecci&oacute;n al viajero, y complementado el d&iacute;a con un buen bueffet e ingresos a diferentes lugares como Pisac, Ollantaytambo, Chicvhero, entre otros.
        </p>
      </Section>
    </LayoutPage>
  )
}

export default DestinationDetail
