import { Link } from 'react-router-dom'
import NavigationLinks from './NavigationLinks'
import { BsBook } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'
import SocialNetwork from './SocialNetwork'

const Footer = (): JSX.Element => {
  return (
    <footer className='bg-green flex flex-col justify-center items-center gap-16 xl:px-32 xl:pb-8'>
      <article className='bg-orange inline-flex flex-wrap justify-center items-start gap-16 px-8 py-4'>
        <div>
          <p className='flex flex-col'>
            <span className='font-bold text-white'>
              Dirección
            </span>
            <span className='text-sm text-white'>
              Av. El Sol, Galerías UNSAAC (Oficina 3)
            </span>
          </p>
        </div>
        <div>
          <p className='flex flex-col'>
            <span className='font-bold text-white'>
              Teléfono
            </span>
            <span className='text-sm text-white'>
              +51 984 748 106
            </span>
          </p>
        </div>
        <div>
          <p className='flex flex-col'>
            <span className='font-bold text-white'>
              Correo
            </span>
            <span className='text-sm text-white'>
              agtcarmen@hotmail.com
            </span>
          </p>
        </div>
      </article>
      <section className='w-full flex justify-between items-center'>
        <Link to='/'>
          <img src='/logo.png' alt='logo carmen agencia de viajes y turismo' />
        </Link>

        <NavigationLinks />

        <article className='flex flex-col items-center gap-2'>
          <p className='uppercase text-sm text-white flex flex-col justify-center items-center'>
            <span>
              Libro de
            </span>
            <span className='font-bold'>
              reclamaciones
            </span>
          </p>
          <BsBook size={64} className='text-white' />
        </article>
      </section>
      <section className='w-full flex justify-between items-center'>
        <p className='text-white'>
          © 2023 Todos los derechos reservados
        </p>
        <article className='flex justify-center items-center gap-2 text-white'>
          <Link to='/aviso-legal'>
            Aviso legal
          </Link>
          <TbPointFilled />
          <Link to='/politicas-de-privacidad'>
            Politicas de privacidad
          </Link>
          <TbPointFilled />
          <Link to='/politicas-de-cookies'>
            Politicas de Cookies
          </Link>
        </article>

        <SocialNetwork />
      </section>
    </footer>
  )
}

export default Footer
