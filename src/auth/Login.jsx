import { Link } from 'react-router-dom'
import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import SignIn from './SignIn'

const Login = () => {
  const { t } = useLang()

  return (
    <LayoutPage title="Iniciar sesión">
      <Section className="bg-white py-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <SignIn />

          <article className="mt-8">
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="inline-block text-blue underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
              >
                {t('login.recover_account')}
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
            <img
              src="/images/illustrations/login.svg"
              alt="login file"
              className="w-full"
            />
          </picture>
          <article className="space-y-2">
            <h1 className="text-blue text-center text-2xl font-bold flex flex-col justify-center items-center">
              Iniciar sesión / Registrarse
            </h1>
            <p className="text-center text-xl">
              Explora un mundo de posibilidades. Inicia sesión si ya tienes una
              cuenta o regístrate para descubrir todo lo que puedes hacer con
              nosotros.
            </p>
          </article>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Login
