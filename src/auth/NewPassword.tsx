import { useLang } from '@hooks/useLang'
import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import EnterNewPassword from './components/EnterNewPassword'

function NewPassword() {
  const { t } = useLang()

  return (
    <LayoutPage title="Ingresa tu nueva contraseña">
      <Section className="py-24 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">
        <div className='md:col-span-3'>
          <EnterNewPassword />
        </div>

        <div className="md:col-span-2 flex flex-col justify-center items-center gap-4 sm:flex-row md:flex-col">
          <picture className="inline-block w-auto mb-8">
            <img
              src="/images/illustrations/login.svg"
              alt="login file"
              className="w-full sm:w-full mx-auto md:w-full"
            />
          </picture>
          <p className="text-justify text-xl">{t('login.enterYourNewPasswordDescription')}</p>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default NewPassword
