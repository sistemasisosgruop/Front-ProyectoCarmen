import { useLang } from '@hooks/useLang'
import ButtonLinkSm from '@components/ButtonLinkSm'
import { BiTimer } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'

interface Props {
  imagePath: string
  alt: string
}

const PromotionCard = ({ imagePath, alt }: Props): JSX.Element => {
  const { t } = useLang()

  return (
    <div className="relative bg-white rounded-xl overflow-hidden w-full flex flex-col border border-white shadow-dark group/descripcion">
      <img src={imagePath} alt={alt} className="w-full" />
      <div className="absolute top-2 right-2 rounded-md px-2 py-1 bg-white border border-blue border-opacity-90">
        <p className="text-dark text-center font-bold">4.5</p>
      </div>
      <article className="p-4">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <h3 className="text-dark text-2xl text-center font-bold">
            Laguna azul
          </h3>
          <p className="uppercase text-blue text-sm text-center">
            TOUR FULLDAY
          </p>
        </div>
        <ul className="mb-4">
          <li className="flex justify-start items-center gap-2">
            <FaMapMarkerAlt size={18} className="text-blue" />
            <span>Cusco, Perú</span>
          </li>
          <li className="flex justify-start items-center gap-2">
            <BiTimer size={18} className="text-blue" />
            <span>8 horas</span>
          </li>
          <li className="flex justify-start items-center gap-2">
            <HiUsers size={18} className="text-blue" />
            <span>Hasta 12 personas</span>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <p className="flex flex-col justify-start">
            <span className="text-lg font-bold">
              <strong className="text-blue">S/.&nbsp;</strong>
              <strong className="text-dark">90.00</strong>
            </span>
            <span className="text-sm text-gray-600">Precio por persona</span>
          </p>
          <ButtonLinkSm
            to="destinos-populares/detalle"
            text={t('general.view_more')}
            background="bg-orange"
          />
        </div>
      </article>
    </div>
  )
}

export default PromotionCard
