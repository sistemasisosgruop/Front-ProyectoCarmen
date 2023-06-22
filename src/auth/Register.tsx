import { Link } from 'react-router-dom'
import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import SignUp from './SignUp'

function Register() {
  const { t } = useLang()

  return (
    <LayoutPage title="Registrate">
      <Section className="bg-white py-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16">
        <div>
          <SignUp />

          <article className="mt-8">
            <div className="flex justify-start items-center gap-1">
              <p>{t('login.already_have_account')}</p>
              <Link
                to="/iniciar-sesion"
                className="inline-block text-blue font-bold underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
              >
                {t('login.sign_in')}
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
              {t('login.sign_in_title')}
            </h1>
            <p className="text-center text-xl">{t('login.sign_in_description')}</p>
          </article>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Register
