import { Link } from 'react-router-dom'
import { useForm } from '@hooks/useForm'
import { useLang } from '@hooks/useLang'
import MyFormInput from '@forms/MyFormInput'
import { useGetRequest } from '@hooks/useGetRequest'

const SignIn = () => {
  const { formData, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })
  const [data, loading, error] = useGetRequest(
    'http://localhost:5000/api/v1/users'
  )
  const { t } = useLang()

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
    resetForm()
  }

  console.log(data)

  return (
    <section className="rounded-xl overflow-hidden bg-gray-100 px-4 py-2 border border-blue border-opacity-25">
      <form
        onSubmit={handleSubmit}
        autoComplete="false"
        className="w-full flex flex-col justify-center gap-4 mb-8"
      >
        <article className="flex flex-col justify-center items-start gap-4">
          <MyFormInput
            label={t('login.email')}
            type="text"
            name="email"
            value={formData.email}
            handleChange={handleChange}
          />

          <MyFormInput
            label={t('login.password')}
            type="password"
            name="password"
            value={formData.password}
            handleChange={handleChange}
          />
        </article>
        <button
          type="submit"
          className="w-full bg-blue px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-90"
        >
          {t('login.sign_in')}
        </button>
      </form>

      <div className="relative w-full">
        <p className="text-center px-4 z-20 bg-gray-100">
          {t('login.other_options')}
        </p>
        <hr className="absolute top-3 -z-10 border-none w-full bg-white py-[1px]" />
      </div>

      <article className="flex flex-col justify-center items-center gap-2 my-4">
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

export default SignIn
