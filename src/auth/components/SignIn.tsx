import { useContext } from 'react'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import jwtDecode from 'jwt-decode'
import { useLang } from '@hooks/useLang'
import { AuthContext } from '@context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { GoogleLogin } from '@react-oauth/google'
import { API_URL } from '@utils/consts'
import Input from '@forms/Input'
import { Link } from 'react-router-dom'

function SignIn() {
  const { t } = useLang()
  const { login } = useContext(AuthContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, data)
      console.log(response.data)

      const token: string = response.data.token
      login(token)
      toast.success(response.data?.message)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message)
      }
    }
    // finally {
    //   reset()
    //   const token = window.sessionStorage.getItem('token')
    //   if (!token) return
    //   const user: User = camelcaseKeys(jwtDecode(token.slice(4)))
    //
    //   if (token && user.roleId === 1) {
    //     navigate('/admin/calendario', { replace: true })
    //   }
    //
    //   if (token && user.roleId === 2) {
    //     navigate('/', { replace: true })
    //   }
    // }
  }

  return (
    <section className="rounded-xl bg-white p-8 border border-gray-300">
      <h2 className='text-2xl text-center text-blue font-bold mb-8'>
        {t('login.sign_in_title')}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="false"
        className="w-full flex flex-col justify-center gap-4 mb-8"
      >
        <article className="flex flex-col justify-center items-start gap-4">
          <Input
            name="email"
            label={t('login.email') ?? ''}
            register={register}
            required={true}
            errors={errors}
          />
          <Input
            name="password"
            label={t('login.password') ?? ''}
            type="password"
            register={register}
            required={true}
            errors={errors}
          />
        </article>
        <button
          type="submit"
          disabled={(!watch('email') || !watch('password')) && true}
          className={`
            w-full px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-90
            ${!watch('email') || !watch('password') ? 'bg-gray-600' : 'bg-blue'}
          `}
        >
          {t('login.sign_in')}
        </button>
      </form>

      <hr className="border-none w-full bg-gray-100 py-[1px]" />

      <article className="flex flex-col justify-center items-start gap-2 mt-8">
        <GoogleLogin
          onError={() => console.log('error')}
          onSuccess={credentialResponse => console.log(jwtDecode(credentialResponse.credential ?? ''))}
          useOneTap
        />
      </article>

      <article className="mt-8">
        <div className="flex justify-between items-center">
          <Link
            to="/recover-account"
            className="inline-block text-blue underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
          >
            {t('login.recover_account')}
          </Link>
          <Link
            to="/register"
            className="inline-block text-orange font-bold underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
          >
            {t('login.sign_up')}
          </Link>
        </div>
      </article>
    </section>
  )
}

export default SignIn
