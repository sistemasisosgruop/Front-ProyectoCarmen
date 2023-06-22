import { useNavigate, useParams } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useLang } from '@hooks/useLang'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '@utils/consts'
import Input from '@forms/Input'

function EnterNewPassword() {
  const navigate = useNavigate()
  const { token } = useParams()
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
      .post(`${API_URL}/auth/recovery-password/${token}`, data)
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
    <section className="rounded-xl overflow-hidden bg-gray-100 px-4 py-2 border border-blue border-opacity-25">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="false"
        className="w-full flex flex-col justify-center gap-4 mb-8"
      >
        <article className="flex flex-col justify-center items-start gap-4">
          <Input
            id="password"
            label={t('login.newPassword') ?? ''}
            register={register}
            required={true}
            errors={errors}
          />
        </article>
        <button
          type="submit"
          disabled={!watch('password') && true}
          className={`
            w-full px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-90
            ${!watch('email') || !watch('password') ? 'bg-gray-600' : 'bg-blue'}
          `}
        >
          {t('login.changePassword')}
        </button>
      </form>
    </section>
  )
}

export default EnterNewPassword
