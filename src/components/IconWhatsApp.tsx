import { createPortal } from 'react-dom'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

function IconWhatsApp() {
  const date = new Date()
  const hour = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

  return createPortal(
    <div className='z-50 fixed bottom-10 right-10 flex flex-col items-end gap-4'>
      <div className='rounded-xl overflow-hidden'>
        <header className='bg-[#085E53] py-2 px-4 flex justify-between items-center'>
          <div className='flex justify-start items-center gap-4'>
            <div className='w-10 h-10 rounded-full bg-gray-50 flex justify-center items-center'>
              <FaUser size={18} />
            </div>
            <article className='flex flex-col items-start text-white'>
              <h4 className='font-bold text-lg'>
                Carmen AGT
              </h4>
              <p className='text-sm'>
                En línea
              </p>
            </article>
          </div>
          <MdClose size={18} className='text-white' />
        </header>
        <div className='bg-[#E5DCD5] px-8 pt-4 pb-16'>
          <article className='bg-white rounded-xl px-4 py-2'>
            <h6 className='text-lg font-bold'>
              Carmen AGT
            </h6>
            <p className='mb-4'>
              ¡Hola!, ¿Cómo podemos ayudarte?
            </p>
            <p className='text-end text-sm'>
              {hour}
            </p>
          </article>
        </div>
        <footer className='bg-white px-8 py-4'>
          <a
            href='https://wa.me/51942208501'
            className='bg-[#2DCC70] flex justify-center items-center gap-4 rounded-xl py-2 px-6 w-full text-white font-bold'
            target='_blank' rel="noreferrer noopener"
          >
            <BsWhatsapp />
            <span>
              Ir a WhatsApp
            </span>
          </a>
        </footer>
      </div>

      <button className='bg-[#4EC65A] rounded-full w-12 h-12 flex justify-center items-center'>
        <AiOutlineWhatsApp size={24} className='text-white' />
      </button>
    </div>,
    document.getElementById('whatsapp') ?? document.createDocumentFragment()
  )
}

export default IconWhatsApp
