import { Link } from 'react-router-dom'

interface Props {
  isScrolled: boolean
}

const Logo = ({ isScrolled }: Props): JSX.Element => {
  return (
    <Link to='/' className='flex flex-col md:pl-16 xl:pl-32'>
      <img
        src='/logo.png'
        alt='logo carmen - agencia de viajes y turismo'
        className={`w-48 md:w-56 ${isScrolled ? 'xl:w-32' : ''}`}
      />
    </Link>
  )
}

export default Logo

