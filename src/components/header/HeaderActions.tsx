import type { TFunction } from 'i18next'
import { Link } from 'react-router-dom'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaUser, FaShoppingBag } from 'react-icons/fa'

interface Props {
  isScrolled?: boolean | undefined
  t: TFunction<string, undefined, string>
  toggleLang: (lang: string) => void
}

const HeaderActions = ({ isScrolled, t, toggleLang }: Props): JSX.Element => {
  return (
    <section className={`bg-green grid place-content-center py-3 px-8 md:place-content-end md:rounded-l-full ${isScrolled ?? false ? 'mb-2' : ''}`}>
      <div className='flex flex-col justify-start gap-8 md:flex-row'>
        <article className='flex justify-content items-center gap-2'>
          <AiOutlineWhatsApp size={18} className='text-white' />
          <p className='text-white'>
            WhatsApp 984 748 106
          </p>
        </article>
        <button className='flex justify-content items-center gap-2'>
          <FaUser size={18} className='text-white' />
          <p className='text-white'>
            {t('header.logIn')}
          </p>
        </button>
        <Link to='mis-compras' className='flex justify-content items-center gap-2'>
          <FaShoppingBag size={18} className='text-white' />
          <p className='text-white'>
            {t('header.myShop')}
          </p>
        </Link>
        <select
          onChange={(e) => { toggleLang(e.target.value) }}
          className='bg-white text-black px-2 py-1 rounded-md inline-block cursor-pointer'
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
  )
}

export default HeaderActions

