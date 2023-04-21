import { Link } from 'react-router-dom'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaUser, FaShoppingBag } from 'react-icons/fa'

const HeaderActions = (): JSX.Element => {
  return (
    <section className='bg-green grid place-content-center p-4 md:rounded-l-full'>
      <div className='flex flex-col justify-start gap-4 md:flex-row'>
        <article className='flex justify-content items-center gap-2'>
          <AiOutlineWhatsApp size={18} className='text-white' />
          <p className='text-white'>
            WhatsApp 984 748 106
          </p>
        </article>
        <button className='flex justify-content items-center gap-2'>
          <FaUser size={18} className='text-white' />
          <p className='text-white'>
            Iniciar Sesión
          </p>
        </button>
        <Link to='mis-compras' className='flex justify-content items-center gap-2'>
          <FaShoppingBag size={18} className='text-white' />
          <p className='text-white'>
            Mis Compras
          </p>
        </Link>
        <select className='bg-white text-black px-2 py-1 rounded-md inline-block cursor-pointer'>
          <option>
            🇪🇸 ES
          </option>
          <option>
            🇺🇸 EN
          </option>
        </select>
      </div>
    </section>
  )
}

export default HeaderActions
