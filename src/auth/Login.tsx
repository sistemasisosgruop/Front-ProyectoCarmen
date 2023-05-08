import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { IoIosClose } from 'react-icons/io'

interface Props {
  toggleShowLogin: () => void
}

const Login = ({ toggleShowLogin }: Props): JSX.Element => {
  return createPortal(
    <div className='fixed top-0 left-0 z-50 w-screen h-screen bg-dark bg-opacity-90 grid place-content-center'>
      <section className='bg-white rounded-xl overflow-hidden px-8'>
        <header className='w-full border-b border-b-gray-400 px-2 py-2 flex justify-between items-center gap-8'>
          <h4 className='text-xl text-dark text-center font-bold'>
            Datos del usuario principal
          </h4>
          <button
            type='button'
            onClick={toggleShowLogin}
            className=''
          >
            <IoIosClose size={32} />
          </button>
        </header>

        <article className='mt-8'>
          <form autoComplete='false'>
            <div className='flex flex-col items-start justify-center mb-4'>
              <label htmlFor='email' className='text-dark font-bold'>
                Correo electronico
              </label>
              <input
                type='text'
                name='email'
                placeholder='Por ejemplo: carmen@gmail.com'
                className='w-full px-4 py-2 rounded-xl border border-gray-400 focus:border-blue focus:outline-none'
              />
            </div>
            <div className='mb-4'>
              <button
                type='button'
                className='w-full bg-blue px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-90'
              >
                Continuar con correo
              </button>
            </div>
          </form>
          <Link to='/' className='inline-block text-blue underline hover:text-opacity-90 hover:transition-all duration-300'>
            Recuperar cuenta
          </Link>
        </article>

        <div className='relative w-full'>
          <hr
            className='absolute top-1/2 left-0 translate-y-1/2 -z-10 border-none w-full bg-gray-200 py-[0.5px]'
          />
          <p className='inline-block text-dark text-center bg-white px-4 py-1 z-10'>
            Otras opciones
          </p>
        </div>

        <article className='flex flex-col justify-center items-center gap-2 my-8'>
          <Link to='' className='w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl'>
            Continuar con Facebook
          </Link>
          <Link to='' className='w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl'>
            Continuar con Google
          </Link>
          <Link to='' className='w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl'>
            Continuar con Apple
          </Link>
        </article>
      </section>
    </div>,
    document.getElementById('portal') ?? document.createDocumentFragment()
  )
}

export default Login
