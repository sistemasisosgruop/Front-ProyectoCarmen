import { Link } from 'react-router-dom'

const Logo = (): JSX.Element => {
  return (
    <Link to='/' className='flex flex-col md:pl-16 xl:pl-32'>
      <img
        src='/logo.png'
        alt='logo carmen - agencia de viajes y turismo'
        className='w-48 md:w-56 xl:w-64'
      />
    </Link>
  )
}

export default Logo

