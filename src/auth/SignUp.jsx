import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useLang } from '@hooks/useLang'
import MyFormInput from '@components/forms/FormInput'

const SignUp = () => {
  const {
    register,
    formState: { errors }
  } = useForm()
  const { t } = useLang()

  return (
    <section className="rounded-xl overflow-hidden bg-gray-100 px-4 py-2 border border-blue border-opacity-25">
      <form autoComplete="false">
        <article className="mt-8">
          <MyFormInput
            label="Nombres"
            name="names"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <MyFormInput
            label="Apellidos"
            name="lastNames"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
        </article>
      </form>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="inline-block text-blue underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
        >
          {t('login.recover_account')}
        </Link>
        <Link
          to="/"
          className="inline-block text-orange font-bold underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
        >
          Registrate
        </Link>
      </div>

      <article className="flex flex-col justify-center items-center gap-2 my-8">
        <Link
          to=""
          className="w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl"
        >
          Continuar con Facebook
        </Link>
        <Link
          to=""
          className="w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl"
        >
          Continuar con Google
        </Link>
        <Link
          to=""
          className="w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl"
        >
          Continuar con Apple
        </Link>
      </article>
    </section>
  )
}

export default SignUp
