import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import EnterRecoveryEmail from './components/EnterRecoveryEmail'

function RecoverPassword() {
  const { t } = useLang()

  return (
    <LayoutPage title="Iniciar sesión">
      <Section className="py-16 grid grid-cols-1 gap-24 md:grid-cols-5 md:gap-8">
        <div className='md:col-span-3'>
          <EnterRecoveryEmail />
        </div>

        <div className="md:col-span-2">
          <picture className="inline-block w-full mb-8">
            <img src="/images/illustrations/login.svg" alt="login file" className="w-[60%] md:w-full mx-auto" />
          </picture>
          <p className="text-justify text-xl">{t('login.recoveryYourAccountDescription')}</p>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default RecoverPassword
