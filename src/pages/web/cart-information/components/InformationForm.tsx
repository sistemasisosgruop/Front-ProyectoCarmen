import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import Input from '@forms/Input'
import FormSelect from '@forms/FormSelect'

function InformationForm() {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <>
      <article className="w-full flex flex-col gap-4 sm:flex-row">
        <Input
          name="names"
          label="Nombres"
          register={register} required={true}
          errors={errors}
        />
        <Input
          name="lastName"
          label="Apellidos"
          register={register}
          required={true}
          errors={errors}
        />
      </article>
      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid grid-cols-3 items-end gap-4 col-span-1">
          <FormSelect
            label="Tipo y número de documento"
            labelStyles="text-sm text-gray-600"
            name="typeDocument"
            options={[
              { value: 'dni', text: 'DNI' },
              { value: 'pasaporte', text: 'Pasaporte' },
              { value: 'ce', text: 'CE' }
            ]}
          />
          <div className='col-span-2'>
            <Input
              label=""
              name="numberDocument"
              register={register}
              required={true}
              errors={errors}
            />
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Género</p>
          <div className=" flex justify-start items-center gap-4">
            <label htmlFor="m" className="flex justify-start items-center gap-2">
              <input type="radio" name="m" />
              <span>Masculino</span>
            </label>
            <label htmlFor="m" className="flex justify-start items-center gap-2">
              <input type="radio" name="m" />
              <span>Femenino</span>
            </label>
          </div>
        </div>
      </article>

      <article className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="birthDate" className="text-sm text-gray-600">
            Fecha de nacimiento
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
            name="birthDate"
          />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">¿Eres estudiante?</p>
          <div className="flex justify-start items-center gap-4">
            <label htmlFor="m" className="flex justify-start items-center gap-2">
              <input type="radio" name="m" value="yes" />
              <span>Si</span>
            </label>
            <label htmlFor="m" className="flex justify-start items-center gap-2">
              <input type="radio" name="m" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            labelStyles="text-sm text-gray-600"
            name="typeDocument"
            options={[
              { value: 'dni', text: 'DNI' },
              { value: 'pasaporte', text: 'Pasaporte' },
              { value: 'ce', text: 'CE' }
            ]}
          />
          <div className='col-span-2'>
            <Input
              label=""
              name="numberDocument"
              register={register}
              required={true}
              errors={errors}
            />
          </div>
        </div>
      </article>

      <article>
        <Input
          name="email"
          label="Correo electrónico"
          register={register}
          required={true}
          errors={errors}
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input
          label="Código postal"
          name="postalCode"
          register={register}
          required={true}
          errors={errors}
        />
        <div className='sm:col-span-2'>
          <Input
            label="Dirección"
            name="address"
            register={register}
            required={true}
            errors={errors}
          />
        </div>
      </article>
    </>
  )
}

export default InformationForm