import type { TFunction } from 'i18next'
import NavLink from './NavLink'
import { BsAirplane } from 'react-icons/bs'
import { BiHelpCircle, BiBriefcaseAlt } from 'react-icons/bi'
import { MdSupervisedUserCircle } from 'react-icons/md'
import { HiOutlineHome } from 'react-icons/hi'

interface Props {
  isScrolled?: boolean | undefined
  t: TFunction<string, undefined, string>
}

const NavigationMenu = ({ isScrolled, t }: Props): JSX.Element => {
  return (
    <nav className={`pt-8 grid place-content-center xl:pt-0 ${isScrolled ?? false ? '' : 'xl:absolute xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2 z-20 '}`}>
      <ul className='flex flex-col justify-start items-start gap-4 md:flex-row'>
        <li>
          <NavLink path='/habitaciones' text={t('header.rooms')} customClass='flex-row md:flex-col' icon={<HiOutlineHome />} />
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
