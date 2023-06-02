import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLang } from '@hooks/useLang'
import DatePicker from 'react-datepicker'
import FormInput from '@forms/FormInput'
import Button from '@components/Button'

const SignUp = () => {
  const [startDate, setStartDate] = useState(new Date())
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const { t } = useLang()

  const onSubmit = data => {
    console.log({ ...data, startDate })
    reset()
  }

  return (
    <section className="rounded-xl overflow-hidden bg-gray-100 px-4 py-8 border border-blue border-opacity-25 md:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="false"
        className="flex flex-col gap-4"
      >
        <article className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <FormInput
            label={t('login.name')}
            name="first_name"
            register={register}
            rules={{ required: t('errors.required', { name: 'names' }) }}
            errors={errors}
          />
          <FormInput
            label={t('login.last_name')}
            name="last_name"
            register={register}
            rules={{ required: t('errors.required', { name: 'last names' }) }}
            errors={errors}
          />
        </article>

        <article className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label className="text-sm text-gray-600 inline-block mb-1">
              {t('login.sex')}
            </label>
            <select
              {...register('genre', {
                required: t('errors.required', { name: 'gender' })
              })}
              className="w-full bg-white text-gray-600 py-2 px-6 border border-gray-400 rounded-xl focus:border-blue"
            >
              <option value="m">Masculino</option>
              <option value="f">Femenino</option>
            </select>
          </div>
          <FormInput
            label={t('login.phone_number')}
            name="phone_number"
            register={register}
            rules={{ required: t('errors.required', { name: 'phone number' }) }}
            errors={errors}
          />
        </article>

        <article className="grid grid-cols-5 items-end gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-1 col-span-2">
            <label
              htmlFor="typeDocument"
              className="text-gray-600 text-sm inline-block mb-1"
            >
              {t('login.document_type')}
            </label>
            <select
              required
              className="w-full bg-white text-gray-600 py-2 px-6 border border-gray-400 rounded-xl focus:border-blue"
              {...register('document_type', {
                required: t('errors.required', { name: 'document type' })
              })}
            >
              <option className="w-full">DNI</option>
              <option className="w-full">Pasaporte</option>
              <option className="w-full">Carnet de extranjería</option>
            </select>
          </div>
          <FormInput
            label={t('login.document_number')}
            name="document_number"
            register={register}
            rules={{
              required: t('errors.required', { name: 'document number' })
            }}
            errors={errors}
            extraClasses="col-span-3"
          />
        </article>

        <article className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label
              htmlFor="birthday"
              className="text-sm text-gray-600 inline-block mb-1"
            >
              {t('login.birthday')}
            </label>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 inline-block mb-1">
              {t('login.student')}
            </label>
            <fieldset
              {...register('student', {
                required: t('errors.required', { name: 'student' })
              })}
              className="flex justify-start items-center gap-4"
            >
              <label>
                <input type="radio" name="student" value={true} />
                &nbsp; Sí
              </label>
              <label>
                <input type="radio" name="student" value={false} />
                &nbsp; No
              </label>
            </fieldset>
          </div>
        </article>

        <hr className="border-none w-full inline-block py-[0.5px] bg-gray-200 my-2 mx-auto" />

        <FormInput
          label={t('login.email')}
          name="email"
          register={register}
          rules={{ required: t('errors.required', { name: 'email' }) }}
          errors={errors}
        />
        <FormInput
          label={t('login.password')}
          name="password"
          type="password"
          register={register}
          rules={{ required: t('errors.required', { name: 'password' }) }}
          errors={errors}
        />
        <Button text={t('login.register')} type="submit" />
      </form>
    </section>
  )
}

export default SignUp
