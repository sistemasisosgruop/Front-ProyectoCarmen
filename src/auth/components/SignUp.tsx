import { useState } from 'react'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import { useLang } from '@hooks/useLang'
import axios from 'axios'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker'
import Button from '@components/Button'
import Input from '@components/forms/Input'
import { API_URL } from '@utils/consts'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [startDate, setStartDate] = useState(new Date())
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FieldValues>()
  const { t } = useLang()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const newData = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      genre: data.gender,
      phone_number: data.phoneNumber,
      country_code: 1,
      document_type: data.typeDocument,
      document_number: data.documentNumber,
      birthday: startDate,
      student: data.student,
      role_id: 2
    }

    await axios
      .post(`${API_URL}/users`, newData)
      .then(response => {
        toast.success(response.statusText)
        navigate('/iniciar-sesion')
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.statusText)
        }
      })
      .finally(() => reset())
  }

  return (
    <section className="rounded-xl overflow-hidden bg-white p-8 border border-gray-100 md:px-8">
      <h2 className='text-2xl text-center text-blue font-bold mb-4'>
        {t('login.sign_up')}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="false" className="flex flex-col gap-4">
        <article className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Input
            name="firstName"
            label={t('login.name') ?? ''}
            register={register}
            required={true}
            errors={errors}
          />
          <Input
            label={t('login.last_name') ?? ''}
            name="lastName"
            register={register}
            required={true}
            errors={errors}
          />
        </article>

        <article className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label className="text-sm text-gray-600 inline-block mb-1">{t('login.sex')}</label>
            <select
              {...register('gender', {
                required: t('errors.required', { name: 'gender' }) ?? ''
              })}
              className="w-full bg-white text-gray-600 py-2 px-6 border border-gray-400 rounded-xl focus:border-blue"
            >
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>
          <Input
            name="phoneNumber"
            label={t('login.phone_number') ?? ''}
            register={register}
            required={true}
            errors={errors}
          />
        </article>

        <article className="grid grid-cols-5 items-end gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-1 col-span-2">
            <label htmlFor="typeDocument" className="text-gray-600 text-sm inline-block mb-1">
              {t('login.document_type')}
            </label>
            <select
              required
              className="w-full bg-white text-gray-600 py-2 px-6 border border-gray-400 rounded-xl focus:border-blue"
              {...register('documentType', {
                required: t('errors.required', { name: 'document type' }) ?? ''
              })}
            >
              <option className="w-full" value="dni">
                DNI
              </option>
              <option className="w-full" value="pasaporte">
                Pasaporte
              </option>
              <option className="w-full" value="ce">
                Carnet de extranjería
              </option>
            </select>
          </div>
          <div className='col-span-3'>
            <Input
              name="documentNumber"
              label={t('login.document_number') ?? ''}
              register={register}
              required={true}
              errors={errors}
            />
          </div>
        </article>

        <article className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label htmlFor="birthday" className="text-sm text-gray-600 inline-block mb-1">
              {t('login.birthday')}
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 inline-block mb-1">{t('login.student')}</label>
            <fieldset
              {...register('student', {
                required: t('errors.required', { name: 'student' }) ?? ''
              })}
              className="flex justify-start items-center gap-4"
            >
              <label>
                <input type="radio" name="student" value="true" />
                &nbsp; Sí
              </label>
              <label>
                <input type="radio" name="student" value="false" />
                &nbsp; No
              </label>
            </fieldset>
          </div>
        </article>

        <hr className="border-none w-full inline-block py-[0.5px] bg-gray-200 my-2 mx-auto" />

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
        <Button text={t('login.register') ?? ''} type="submit" />
      </form>

      <div className="flex justify-start items-center gap-1 mt-8">
        <p>{t('login.already_have_account')}</p>
        <Link
          to="/login"
          className="inline-block text-blue font-bold underline hover:text-opacity-90 hover:decoration-wavy hover:transition-all duration-300"
        >
          {t('login.sign_in')}
        </Link>
      </div>
    </section>
  )
}

export default SignUp
