import { Link, useNavigate } from 'react-router-dom'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import { useLang } from '@hooks/useLang'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '@utils/consts'
import Input from '@forms/Input'

function EnterRecoveryEmail() {
  const navigate = useNavigate()
  const { t } = useLang()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    await axios
      .post(`${API_URL}/auth/recovery-password`, data)
      .then(response => {
        toast.success(response.data.message)
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.message)
        }
      })
      .finally(() => {
        reset()
        navigate('/iniciar-sesion')
      })
  }

  return (
    <section className="rounded-xl bg-white p-8 border border-gray-100">
      <h2 className='text-2xl text-center text-blue mb-8 font-bold'>
        {t('login.recoveryYourAccount')}
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
        </article>
        <button
          type="submit"
          disabled={!watch('email') && true}
          className={`
            w-full px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-90
            ${!watch('email') || !watch('password') ? 'bg-gray-600' : 'bg-blue'}
          `}
        >
          {t('login.sendCode')}
        </button>
      </form>

      <Link
        to="/login"
        className="inline-block text-blue font-bold underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
      >
        {t('login.sign_in')}
      </Link>
    </section>
  )
}

export default EnterRecoveryEmail
