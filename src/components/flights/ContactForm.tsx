const ContactForm = (): JSX.Element => {
  return (
    <div className='bg-orange py-4 px-8 rounded-md'>
      <h2 className='text-5xl font-bold uppercase mb-6 text-center text-white'>
        Contactanos
      </h2>
      <form className='flex flex-col gap-4'>
        <div className='flex gap-8 w-full'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='names' className='text-gray-100'>
              Nombres y apellidos
            </label>
            <input
              type='text'
              className='px-4 py-2 rounded-md text-base border border-gray-200'
              name='names'
              placeholder='Nombres y apellidos...'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='phone' className='text-gray-100'>
              Numero de celular
            </label>
            <div className='flex gap-2 w-full'>
              <select className='px-2 py-[2px] rounded-md bg-white text-gray-400'>
                <option>PE</option>
                <option>ARG</option>
                <option>CO</option>
              </select>
              <input
                type='tel'
                className='px-4 py-2 rounded-md text-base border border-gray-200 w-full'
                name='phone'
                placeholder='Numero de celular...'
              />
            </div>
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='names' className='text-gray-100'>
              DNI, RUC o Pasaporte
            </label>
            <input
              type='text'
              className='px-4 py-2 rounded-md text-base border border-gray-200'
              name='names'
              placeholder='Numero de identificacion...'
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='email' className='text-gray-100'>
              Correo electronico
            </label>
            <input
              type='email'
              className='px-4 py-2 rounded-md text-base border border-gray-200 w-full'
              name='email'
              placeholder='Correo electronico...'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='subject' className='text-gray-100'>
            Asunto
          </label>
          <input
            type='text'
            className='px-4 py-2 rounded-md text-base border border-gray-200'
            name='subject'
            placeholder='Escriba el asunto...'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='message' className='text-gray-100'>
            Contenido del mensaje
          </label>
          <textarea
            className='px-4 py-2 rounded-md text-base border border-gray-200'
            name='message'
            placeholder='Ingrese su mensaje...'
          ></textarea>
        </div>
        <div className='flex justify-center items-center'>
          <button
            type='submit'
            className='bg-green px-8 py-2 text-white font-bold rounded-md hover:bg-opacity-90'
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
