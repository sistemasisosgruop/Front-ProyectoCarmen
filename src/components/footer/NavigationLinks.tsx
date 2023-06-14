import { Link } from 'react-router-dom'
import { useLang } from '@hooks/useLang'

const NavigationLinks = () => {
  const { t } = useLang()

  return (
    <ul className="grid grid-cols-1 grid-rows-3 flex-wrap justify-start items-start gap-y-2 gap-x-16 sm:grid-cols-2">
      <li>
        <Link
          to="/habitaciones"
          className="text-white font-bold hover:text-orange group/link"
        >
          <span className="border-l-2 border-gray-200 mr-1 group-hover/link:border-orange"></span>
          {t('general.rooms')}
        </Link>
      </li>
      <li>
        <Link
          to="/vuelos"
          className="text-white font-bold hover:text-orange group/link"
        >
          <span className="border-l-2 border-gray-200 mr-1 group-hover/link:border-orange"></span>
          {t('general.flights')}
        </Link>
      </li>
      <li>
        <Link
          to="/paquetes"
          className="text-white font-bold hover:text-orange group/link"
        >
          <span className="border-l-2 border-gray-200 mr-1 group-hover/link:border-orange"></span>
          {t('general.tour_packages')}
        </Link>
      </li>
      <li>
        <Link
          to="/contactanos"
          className="text-white font-bold hover:text-orange group/link"
        >
          <span className="border-l-2 border-gray-200 mr-1 group-hover/link:border-orange"></span>
          {t('general.contact')}
        </Link>
      </li>
      <li>
        <Link
          to="/sobre-nosotros"
          className="text-white font-bold hover:text-orange group/link"
        >
          <span className="border-l-2 border-gray-200 mr-1 group-hover/link:border-orange"></span>
          {t('general.about_us')}
        </Link>
      </li>
    </ul>
  )
}

export default NavigationLinks
