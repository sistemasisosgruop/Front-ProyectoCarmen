import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useLang } from '@hooks/useLang'
import { AuthContext } from '@context/AuthContext'
import axios from '@lib/axios'
import { toast } from 'react-toastify'
import FormInput from '@forms/FormInput'
import { GoogleLogin } from '@react-oauth/google'

interface LoginRequest {
  email: string
  password: string
}

function SignIn() {
  const navigate = useNavigate()
  const { t } = useLang()
  const authContext = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<LoginRequest>()

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await axios.post('auth/login', data)
      const token = response?.data?.token
      authContext?.login(`jwt ${token}`)
      toast.success(response.data?.message)
    } catch (error: any) {
      toast.error(error.response?.data?.message)
    } finally {
      const token = window.sessionStorage.getItem('token')
      console.log({ 'Finally token': token })

      if (token) {
        navigate('/admin/calendario', { replace: true })
      }
    }

    reset()
  }

  return (
    <section className="rounded-xl overflow-hidden bg-gray-100 px-4 py-2 border border-blue border-opacity-25">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="false"
        className="w-full flex flex-col justify-center gap-4 mb-8"
      >
        <article className="flex flex-col justify-center items-start gap-4">
          <FormInput
            label={t('login.email')}
            name="email"
            register={register}
            rules={{ required: 'The field is required', minLength: 10 }}
            errors={errors}
          />

          <FormInput
            label={t('login.password')}
            name="password"
            type="password"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
        </article>
        <button
          type="submit"
          disabled={(!watch('email') || !watch('password')) && true}
          className={`w-full ${
            !watch('email') || !watch('password') ? 'bg-gray-600' : 'bg-blue'
          } px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-90 `}
        >
          {t('login.sign_in')}
        </button>
      </form>

      <div className="relative w-full">
        <p className="text-center px-4 z-20 bg-gray-100">{t('login.other_options')}</p>
        <hr className="absolute top-3 -z-10 border-none w-full bg-white py-[1px]" />
      </div>

      <article className="flex flex-col justify-center items-center gap-2 my-4">
        <GoogleLogin
          onError={() => console.log('error')}
          onSuccess={credentialResponse => console.log(credentialResponse)}
          useOneTap
        />
      </article>
    </section>
  )
}

export default SignIn
