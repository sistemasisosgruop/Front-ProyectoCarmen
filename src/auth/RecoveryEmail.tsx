import { User } from 'types/user'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import jwtDecode from 'jwt-decode'
import { useLang } from '@hooks/useLang'
import { AuthContext } from '@context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '@utils/consts'
import Input from '@forms/Input'
import camelcaseKeys from 'camelcase-keys'

function RecoveryEmail() {
  const navigate = useNavigate()
  const { t } = useLang()
  const { login } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    await axios
      .post(`${API_URL}/auth/login`, data)
      .then(response => {
        const token = response?.data?.token
        login(`jwt ${token}`)
        toast.success(response.data?.message)
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message)
        }
      })
      .finally(() => {
        reset()
        const token = window.sessionStorage.getItem('token')
        if (!token) return
        const user: User = camelcaseKeys(jwtDecode(token.slice(4)))

        if (token && user.roleId === 1) {
          navigate('/admin/calendario', { replace: true })
        }
      })
  }

  return (
    <section className="rounded-xl overflow-hidden bg-gray-100 px-4 py-2 border border-blue border-opacity-25">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="false"
        className="w-full flex flex-col justify-center gap-4 mb-8"
      >
        <article className="flex flex-col justify-center items-start gap-4">
          <Input
            id="email"
            label={t('login.email') ?? ''}
            register={register}
            required={true}
            errors={errors}
          />
        </article>
        <button
          type="submit"
          disabled={!watch('email') && true}
          className={`
            w-full px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-90
            ${!watch('email') || !watch('password') ? 'bg-gray-600' : 'bg-blue'}
          `}
        >
          Recuperar contraseña
          {t('login.sign_in')}
        </button>
      </form>
    </section>
  )
}

export default RecoveryEmail