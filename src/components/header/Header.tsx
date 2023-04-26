import { motion, AnimatePresence } from 'framer-motion'
import { useToggleMenu } from '../../hooks/useToggleMenu'
import { useScrollPageY } from '../../hooks/useScrollPageY'
import Logo from './Logo'
import HeaderActions from './HeaderActions'
import NavigationMenu from './NavigationMenu'
import { AiOutlineMenu } from 'react-icons/ai'
import { useLang } from '../../hooks/useLang'

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
  const { t, toggleLang } = useLang()

  return (
    <AnimatePresence>
      <header className={`fixed top-0 z-50 bg-white w-full flex justify-between items-center py-6 px-6 ${isScrolled ? 'xl:items-center' : 'xl:items-start'} md:pr-16 xl:pr-8 xl:px-0`}>
        <Logo isScrolled={isScrolled} />

        <button
          onClick={openMenu}
          className='flex justify-center items-center p-1 text-green border border-green rounded-md hover:bg-green hover:text-white hover:transition-colors xl:hidden'
        >
          <AiOutlineMenu size={18} />
        </button>

        <div className={`hidden xl:flex xl:flex-col xl:justify-end md:gap-4 ${isScrolled ? 'mr-32' : ''}`}>
          {!isScrolled && (
            <HeaderActions
              isScrolled={isScrolled}
              t={t}
              toggleLang={toggleLang}
            />
          )}
          <NavigationMenu isScrolled={isScrolled} t={t} />
        </div>

        {isOpenMenu && (
          <motion.div
            className='absolute w-full h-full bg-white top-0 left-0 flex flex-col z-50'
            variants={VARIANTS_MENU}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit='exit'
          >
            <button onClick={closeMenu} className='flex justify-end text-green py-4 px-6'>
              <AiOutlineMenu size={18} />
            </button>
            <HeaderActions
              isScrolled={isScrolled}
              t={t}
              toggleLang={toggleLang}
            />
            <NavigationMenu t={t} />
          </motion.div>
        )}
      </header>
    </AnimatePresence>
  )
}

export default Header

