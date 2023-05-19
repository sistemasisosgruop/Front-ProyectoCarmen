import type { ChangeEvent } from 'react'
import { useLang } from '@hooks/useLang'
import { useState, useEffect } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { Link } from 'react-router-dom'
import Login from '../../auth/Login'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaUser, FaShoppingBag } from 'react-icons/fa'

interface Props {
  isScrolled?: boolean | undefined
}

const HeaderActions = ({ isScrolled }: Props): JSX.Element => {
  const [isLoginShow, setIsLoginShow] = useState<boolean>(false)
  const [saveLang, setSaveLang] = useLocalStorage('lang', '')
  const { t, toggleLang } = useLang()

  useEffect(() => {
    toggleLang(saveLang)
  }, [])

  const toggleSaveLang = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSaveLang(e.target.value)
    toggleLang(e.target.value)
  }

  const toggleShowLogin = (): void => {
    setIsLoginShow(!isLoginShow)
  }

  return (
    <>
      <section className={`bg-turquoise grid place-content-center py-3 px-8 xl:place-content-end xl:rounded-l-full ${isScrolled ?? false ? 'mb-2' : ''}`}>
        <div className='flex flex-col justify-start gap-8 md:flex-row'>
          <article className='flex justify-content items-center gap-2'>
            <AiOutlineWhatsApp size={18} className='text-white' />
            <p className='text-white'>
              WhatsApp 984 748 106
            </p>
          </article>
          <button
            type='button'
            onClick={toggleShowLogin}
            className='flex justify-content items-center gap-2'
          >
            <FaUser size={18} className='text-white' />
            <span className='text-white'>
              {t('components.header.log_in')}
            </span>
          </button>
          <Link to='/mis-compras' className='flex justify-content items-center gap-2'>
            <FaShoppingBag size={18} className='text-white' />
            <p className='text-white'>
              {t('components.header.my_purchases')}
            </p>
          </Link>
          <select
            value={saveLang}
            onChange={toggleSaveLang}
            className='bg-white text-black px-4 py-1 rounded-md cursor-pointer border-none'
          >
            <option value='es'>
              🇪🇸 ES
            </option>
            <option value='en'>
              🇺🇸 EN
            </option>
          </select>
        </div>
      </section>
      {isLoginShow && (
        <Login toggleShowLogin={toggleShowLogin} />
      )}
    </>
  )
}

export default HeaderActions
