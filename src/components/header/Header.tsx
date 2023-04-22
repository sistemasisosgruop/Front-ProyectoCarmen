import { motion, AnimatePresence } from 'framer-motion'
import { useToggleMenu } from '../../hooks/useToggleMenu'
import Logo from './Logo'
import HeaderActions from './HeaderActions'
import NavigationMenu from './NavigationMenu'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = (): JSX.Element => {
  const { isOpenMenu, openMenu, closeMenu } = useToggleMenu()

  const variantsMenu = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 0.4
      }
    }
  }

  return (
    <header className='relative flex justify-between items-start py-6 px-6 md:px-0'>
      <Logo />

      <button
        onClick={openMenu}
        className='flex justify-center items-center p-1 text-green border border-green rounded-md md:hidden'
      >
        <AiOutlineMenu />
      </button>

      <div className='hidden md:flex md:flex-col md:justify-end md:gap-4'>
        <HeaderActions />
        <NavigationMenu />
      </div>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            className='absolute w-full h-full bg-white top-0 left-0 flex flex-col z-50'
            variants={variantsMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit='exit'
          >
            <button onClick={closeMenu} className='flex justify-end text-green py-4 px-6'>
              <AiOutlineMenu size={18} />
            </button>
            <HeaderActions />
            <NavigationMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

