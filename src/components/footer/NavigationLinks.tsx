import { Link } from 'react-router-dom'

const NavigationLinks = (): JSX.Element => {
  return (
    <ul className='grid grid-cols-2 grid-rows-3 flex-wrap justify-start items-start gap-y-2 gap-x-16'>
      <li>
        <Link to='/habitaciones' className='text-white font-bold hover:text-orange group/link'>
          <span className='border-l-2 border-gray-200 mr-1 group-hover/link:border-orange'></span>
          Habitaciones
        </Link>
      </li>
      <li>
        <Link to='/vuelos' className='text-white font-bold hover:text-orange group/link'>
          <span className='border-l-2 border-gray-200 mr-1 group-hover/link:border-orange'></span>
          Vuelos
        </Link>
      </li>
      <li>
        <Link to='/paquetes' className='text-white font-bold hover:text-orange group/link'>
          <span className='border-l-2 border-gray-200 mr-1 group-hover/link:border-orange'></span>
          Paquetes Turisticos
        </Link>
      </li>
      <li>
        <Link to='/contactanos' className='text-white font-bold hover:text-orange group/link'>
          <span className='border-l-2 border-gray-200 mr-1 group-hover/link:border-orange'></span>
          Contacto
        </Link>
      </li>
      <li>
        <Link to='/sobre-nosotros' className='text-white font-bold hover:text-orange group/link'>
          <span className='border-l-2 border-gray-200 mr-1 group-hover/link:border-orange'></span>
          Sobre nosotros
        </Link>
      </li>
    </ul>
  )
}

export default NavigationLinks
