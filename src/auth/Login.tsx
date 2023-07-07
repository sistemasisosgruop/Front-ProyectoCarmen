import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import SignIn from './components/SignIn'

function Login() {
  const { t } = useLang()

  return (
    <LayoutPage title="Iniciar sesión">
      <Section className="py-16 grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-8 lg:16">
        <div className='md:col-span-2'>
          <SignIn />
        </div>

        <div className='md:col-span-1'>
          <picture className="inline-block w-full mb-8">
            <img src="/images/illustrations/login.svg" alt="login file" className="w-full sm:w-[60%] sm:mx-auto md:w-full" />
          </picture>
          <p className="text-justify text-xl">{t('login.sign_in_description')}</p>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Login
