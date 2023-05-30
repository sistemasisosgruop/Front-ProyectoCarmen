import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import MyFormInput from '@forms/FormInput'
import FormSelect from '@forms/FormSelect'

const InformationHorizontalForm = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <>
      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
        <MyFormInput
          label="Nombres"
          name="names"
          register={register}
          rules={{ required: true }}
          errors={errors}
        />
        <MyFormInput
          label="Apellidos"
          name="lastName"
          register={register}
          rules={{ required: true }}
          errors={errors}
        />
        <div className="grid grid-cols-3 items-end gap-4">
          <FormSelect
            label="Tipo y número de documento"
            labelStyles="text-sm text-gray-600 lg:text-sm"
            name="typeDocument"
            options={[
              { value: 'dni', text: 'DNI' },
              { value: 'pasaporte', text: 'Pasaporte' },
              { value: 'ce', text: 'CE' }
            ]}
          />
          <MyFormInput
            label=""
            name="numberDocument"
            register={register}
            rules={{ required: true }}
            errors={errors}
            extraClasses="col-span-2"
          />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Género</p>
          <div className=" flex justify-start items-center gap-4">
            <label
              htmlFor="m"
              className="flex justify-start items-center gap-2"
            >
              <input type="radio" name="m" />
              <span>Masculino</span>
            </label>
            <label
              htmlFor="m"
              className="flex justify-start items-center gap-2"
            >
              <input type="radio" name="m" />
              <span>Femenino</span>
            </label>
          </div>
        </div>
      </article>

      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
        <div>
          <label htmlFor="birthDate" className="text-sm text-gray-600">
            Fecha de nacimiento
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date)
            }}
            className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            name="birthDate"
          />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">¿Eres estudiante?</p>
          <div className="flex justify-start items-center gap-4">
            <label
              htmlFor="m"
              className="flex justify-start items-center gap-2"
            >
              <input type="radio" name="m" value="yes" />
              <span>Si</span>
            </label>
            <label
              htmlFor="m"
              className="flex justify-start items-center gap-2"
            >
              <input type="radio" name="m" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>
        <FormSelect
          label="País"
          labelStyles="text-sm text-gray-600"
          name="country"
          options={[
            { value: 'peru', text: 'Perú' },
            { value: 'argentina', text: 'Argentina' },
            { value: 'chile', text: 'Chile' },
            { value: 'mexico', text: 'México' }
          ]}
        />
        <div className="grid grid-cols-3 items-end gap-4">
          <FormSelect
            label="Tipo y número de documento"
            labelStyles="text-sm text-gray-600 lg:text-sm"
            name="typeDocument"
            options={[
              { value: 'dni', text: 'DNI' },
              { value: 'pasaporte', text: 'Pasaporte' },
              { value: 'ce', text: 'CE' }
            ]}
          />
          <MyFormInput
            label=""
            name="numberDocument"
            register={register}
            rules={{ required: true }}
            errors={errors}
            extraClasses="col-span-2"
          />
        </div>
      </article>

      <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <MyFormInput
          label="Correo electrónico"
          name="email"
          register={register}
          rules={{ required: true }}
          errors={errors}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <MyFormInput
            label="Código postal"
            name="postalCode"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <MyFormInput
            label="Dirección"
            name="address"
            register={register}
            rules={{ required: true }}
            errors={errors}
            extraClasses="md:col-span-2"
          />
        </div>
      </article>
    </>
  )
}

export default InformationHorizontalForm
