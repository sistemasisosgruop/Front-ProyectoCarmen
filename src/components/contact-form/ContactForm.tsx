import { useForm } from 'react-hook-form'
import Button from '@components/Button'
import Input from '@components/forms/Input'
import Textarea from '@components/forms/Textarea'
import { BsSend } from 'react-icons/bs'

function ContactForm() {
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <div className="bg-turquoise py-4 px-8 rounded-xl">
      <h2 className="text-2xl font-bold uppercase mb-6 text-center text-white sm:text-3xl">Contactanos</h2>
      <form className="flex flex-col gap-4">
        <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            id="names"
            label="Nombres y apellidos"
            register={register}
            required={true}
            errors={errors}
          />
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-white text-sm mb-1">
              Numero de celular
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select className="w-full bg-white border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue col-span-1">
                <option>PE</option>
                <option>ARG</option>
                <option>CO</option>
              </select>
              <input
                type="tel"
                className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue col-span-2"
                name="phone"
                placeholder="Numero de celular..."
              />
            </div>
          </div>
        </article>

        <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-white text-sm mb-1">
              Numero de celular
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select className="w-full bg-white border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue col-span-1">
                <option>DNI</option>
                <option>Carnet de extranjería</option>
                <option>Pasaporte</option>
              </select>
              <input
                type="tel"
                className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue col-span-2"
                name="typeDocument"
                placeholder="Tipo de documento..."
              />
            </div>
          </div>
          <Input
            label="Correo electrónico"
            id="email"
            register={register}
            required={true}
            errors={errors}
          />
        </article>

        <article className="flex flex-col gap-2">
          <Input
            label="Asunto"
            id="subject"
            register={register}
            required={true}
            errors={errors}
          />
        </article>

        <article className="flex flex-col gap-2">
          <Textarea
            id="content"
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
