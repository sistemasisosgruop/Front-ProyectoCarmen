import type { TFunction } from 'i18next'
import NavLink from './NavLink'
import { GrHomeRounded } from 'react-icons/gr'
import { BsAirplane } from 'react-icons/bs'
import { BiHelpCircle, BiBriefcaseAlt } from 'react-icons/bi'
import { MdSupervisedUserCircle } from 'react-icons/md'

interface Props {
  isScrolled?: boolean | undefined
  t: TFunction<string, undefined, string>
}

const NavigationMenu = ({ isScrolled, t }: Props): JSX.Element => {
  return (
    <nav className={`pt-4 grid place-content-center ${isScrolled ?? false ? '' : 'md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 z-20 '}`}>
      <ul className='flex flex-col justify-start items-start gap-4 md:flex-row'>
        <li>
          <NavLink path='/habitaciones' text={t('header.rooms')} customClass='flex-row md:flex-col' icon={<GrHomeRounded />} />
        </li>
        <li>
          <NavLink path='/vuelos' text={t('header.flights')} customClass='flex-row md:flex-col' icon={<BsAirplane />} />
        </li>
        <li>
          <NavLink path='/paquetes' text={t('header.packages')} customClass='flex-row md:flex-col' icon={<BiBriefcaseAlt />} />
        </li>
        <li>
          <NavLink path='/contactanos' text={t('header.contact')} customClass='flex-row md:flex-col' icon={<BiHelpCircle />} />
        </li>
        <li>
          <NavLink path='/sobre-nosotros' text={t('header.aboutUs')} customClass='flex-row md:flex-col' icon={<MdSupervisedUserCircle />} />
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu

