import { Link } from 'react-router-dom'
import { useLang } from '@hooks/useLang'
import NavigationLinks from './NavigationLinks'
import SocialNetwork from './SocialNetwork'
import Information from './Information'
import { BsBook } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'

const Footer = () => {
  const { t } = useLang()

  return (
    <footer className="bg-blue flex flex-col justify-center items-center gap-16 md:px-8 pb-8 xl:px-32 xl:pb-8">
      <Information />

      <section className="w-full px-8 flex flex-col justify-between items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-16 lg:justify-between">
        <Link to="/">
          <img src="/logo.png" alt="logo carmen agencia de viajes y turismo" />
        </Link>

        <NavigationLinks />

        <article className="flex flex-col items-center gap-2">
          <p className="uppercase text-sm text-white flex flex-col justify-center items-center">
            {t('components.footer.complainst_book')}
          </p>
          <BsBook size={64} className="text-white" />
        </article>
      </section>
      <section className="w-full flex flex-col justify-between items-center md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:justify-between">
        <p className="text-white">© 2023 {t('components.footer.copyright')}</p>

        <article className="flex flex-wrap justify-center items-center gap-2 text-white">
          <Link to="/aviso-legal">{t('components.footer.legal_warning')}</Link>
          <TbPointFilled />
          <Link to="/politicas-de-privacidad">
            {t('components.footer.privacy_policies')}
          </Link>
          <TbPointFilled />
          <Link to="/politicas-de-cookies">
            {t('components.footer.cookie_policies')}
          </Link>
        </article>

        <SocialNetwork />
      </section>
    </footer>
  )
}

export default Footer
