import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Props {
  isScrolled: boolean
}

const Logo = ({ isScrolled }: Props): JSX.Element => {
  return (
    <Link to='/' className='flex flex-col md:ml-16 xl:ml-32'>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={isScrolled ? { duration: 2.7 } : { duration: 0 }}
        src='/logo.png'
        alt='logo carmen - agencia de viajes y turismo'
        className={isScrolled ? 'h-16 xl:h-16' : 'h-24 xl:h-24'}
      />
    </Link>
  )
}

export default Logo
