import { User } from 'types/user'
import { useEffect, useState } from 'react'
import { useLang } from '@hooks/useLang'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import Input from '@components/forms/Input'
import Button from '@components/Button'

interface Props {
  user: User
}

function UserEdit({ user }: Props) {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FieldValues>()
  const { t } = useLang()

  useEffect(() => {
    setValue('firstName', user.firstName)
    setValue('lastName', user.lastName)
    setValue('gender', user.genre)
    setValue('phoneNumber', user.phoneNumber)
    setValue('countryCode', user.countryCode)
    setValue('documentType', user.documentType)
    setValue('documentNumber', user.documentNumber)
    setValue('birthday', user.birthday)
    setValue('student', user.student)
    setValue('email', user.email)
  }, [])

  const onSubmit: SubmitHandler<FieldValues> = (data): void => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <article className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Input
          id="firstName"
          label={t('login.name') ?? ''}
          register={register}
          required={true}
          errors={errors}
        />
        <Input
          label={t('login.last_name') ?? ''}
          id="lastName"
          register={register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <label className="text-sm text-gray-600 inline-block mb-1">{t('login.sex')}</label>
          <select
            {...register('gender', { required: true })}
            className={`
              w-full bg-white text-gray-600 py-2 px-6 border rounded-xl focus:border-blue
              ${errors.gender ? 'border-red-400' : 'border-gray-400'}
            `}
            defaultValue={user.genre}
          >
            <option value="Male">Masculino</option>
            <option value="Female">Femenino</option>
          </select>
        </div>
        <Input
          id="phoneNumber"
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
            {...register('documentType', { required: true })}
            className={`
              w-full bg-white text-gray-600 py-2 px-6 border rounded-xl focus:border-blue
              ${errors.documentType ? 'border-red-400' : 'border-gray-400'}
            `}
            defaultValue={user.documentType ?? ''}
          >
            <option className="w-full" value="DNI">
              DNI
            </option>
            <option className="w-full" value="Passport">
              Pasaporte
            </option>
            <option className="w-full" value="CE">
              Carnet de extranjería
            </option>
          </select>
        </div>
        <Input
          id="documentNumber"
          label={t('login.document_number') ?? ''}
          register={register}
          required={true}
          errors={errors}
          containerStyles="col-span-3"
        />
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
          <label
            className={`
              text-sm text-gray-600 inline-block mb-1 
              ${errors.student ? 'text-red-400' : 'text-gray-600'}
            `}
          >
            {t('login.student')}
          </label>
          <fieldset
            {...register('student', { required: true })}
            defaultChecked={user.student}
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

      <Input
        id="email"
        label="Correo electrónico"
        register={register}
        required={true}
        errors={errors}
      />
      <Button text="Editar usuario" type="submit" />
    </form>
  )
}

export default UserEdit
