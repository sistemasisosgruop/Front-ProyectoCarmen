import { motion, AnimatePresence } from 'framer-motion'
import { useToggleMenu } from '@hooks/useToggleMenu'
import { useScrollPageY } from '@hooks/useScrollPageY'
import Logo from './Logo'
import HeaderActions from './HeaderActions'
import NavigationMenu from './NavigationMenu'
import { AiOutlineMenu } from 'react-icons/ai'

const VARIANTS_MENU = {
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

const Header = (): JSX.Element => {
  const { isOpenMenu, openMenu, closeMenu } = useToggleMenu()
  const { isScrolled } = useScrollPageY()

  return (
    <header
      className={`
        fixed top-0 z-30 bg-white w-full flex justify-between items-center px-6 md:pr-16 xl:pr-0 xl:px-0 drop-shadow-lg
        ${isScrolled ? 'xl:items-center py-6' : 'py-10 xl:items-start'} 
      `}
    >
      <Logo isScrolled={isScrolled} />

      <button
        onClick={openMenu}
        className="flex justify-center items-center p-1 text-green border border-green rounded-md hover:bg-green hover:text-white hover:transition-colors xl:hidden"
      >
        <AiOutlineMenu size={18} />
      </button>

      <div
        className={`hidden xl:flex xl:flex-col xl:justify-center xl:items-center md:gap-4 ${
          isScrolled ? 'mr-32' : ''
        }`}
      >
        {!isScrolled && <HeaderActions isScrolled={isScrolled} />}

        <NavigationMenu isScrolled={isScrolled} />
      </div>

      {isOpenMenu && (
        <AnimatePresence>
          <motion.div
            className="absolute w-full h-full bg-white top-0 left-0 flex flex-col z-30 md:h-[40vh]"
            variants={VARIANTS_MENU}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
          >
            <button
              onClick={closeMenu}
              className="flex justify-end text-green py-4 px-6"
            >
              <AiOutlineMenu size={18} />
            </button>

            <HeaderActions isScrolled={isScrolled} />

            <NavigationMenu />
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  )
}

export default Header
