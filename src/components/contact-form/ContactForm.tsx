import { useForm } from 'react-hook-form'
import Button from '@components/Button'
import Input from '@forms/Input'
import Textarea from '@forms/Textarea'
import { BsSend } from 'react-icons/bs'

function ContactForm() {
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <div className="bg-white py-4 px-8 rounded-xl">
      <h2 className="text-2xl font-bold uppercase mb-6 text-center text-turquoise sm:text-3xl">
        Contactanos
      </h2>
      <form className="flex flex-col gap-4">
        <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            name="names"
            label="Nombres y apellidos"
            register={register}
            required={true}
            errors={errors}
          />
          <div className="grid grid-cols-3 gap-2">
            <select className="w-full bg-white border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue col-span-1">
              <option>PE</option>
              <option>ARG</option>
              <option>CO</option>
            </select>
            <div className='col-span-2'>
              <Input
                name="phoneNumber"
                label="Número de teléfono"
                register={register}
                required={true}
                errors={errors}
              />
            </div>
          </div>
        </article>

        <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid grid-cols-3 gap-2">
            <select className="w-full bg-white border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue col-span-1">
              <option>DNI</option>
              <option>Carnet de extranjería</option>
              <option>Pasaporte</option>
            </select>
            <div className='col-span-2'>
              <Input
                name="numberDocument"
                label="Número de documento"
                register={register}
                required={true}
                errors={errors}
              />
            </div>
          </div>
          <Input
            label="Correo electrónico"
            name="email"
            register={register}
            required={true}
            errors={errors}
          />
        </article>

        <article className="flex flex-col gap-2">
          <Input
            label="Asunto"
            name="subject"
            register={register}
            required={true}
            errors={errors}
          />
        </article>

        <article className="flex flex-col gap-2">
          <Textarea
            name="content"
            label="Contenido del mensaje"
            register={register}
            required={true}
            errors={errors}
          />
        </article>
        <div className="flex justify-center items-center">
          <Button text="Enviar" showIcon icon={BsSend} />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
