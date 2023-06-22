import { Link } from 'react-router-dom'
import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import RecoveryEmail from './RecoveryEmail'

function RecoverPassword() {
  const { t } = useLang()

  return (
    <LayoutPage title="Iniciar sesión">
      <Section className="bg-white py-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16">
        <div className="w-full flex flex-col justify-center items-center">
          <RecoveryEmail />

          <article className="mt-8">
            <div className="flex justify-between items-center">
              <Link
                to="/iniciar-sesion"
                className="inline-block text-blue underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
              >
                {t('login.sign_in')}
              </Link>
              <Link
                to="/registrate"
                className="inline-block text-orange font-bold underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
              >
                {t('login.sign_up')}
              </Link>
            </div>
          </article>
        </div>

        <div className="row-start-1 sm:row-start-auto">
          <picture className="inline-block w-full mb-8">
            <img src="/images/illustrations/login.svg" alt="login file" className="w-full" />
          </picture>
          <article className="space-y-2">
            <h1 className="text-blue text-center text-2xl font-bold flex flex-col justify-center items-center">
              Recupera tu contraseña
            </h1>
            <p className="text-center text-xl">{t('login.sign_in_description')}</p>
          </article>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default RecoverPassword
