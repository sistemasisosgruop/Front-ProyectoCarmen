import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'

interface Props {
  children: React.ReactNode
  title: string
  closeModal: () => void
}

const Modal = ({ children, title, closeModal }: Props): JSX.Element => {
  return createPortal(
    <motion.div
      initial={{ opacity: 0, z: -25, y: 0, x: 0 }}
      animate={{ opacity: 1, z: 0, y: 0, x: 0 }}
      transition={{ duration: 0.3, type: 'easeInOut' }}
      className="w-screen h-screen bg-dark bg-opacity-80 fixed top-0 left-0 z-20 px-8 py-4 md:px-16 md:py-8 xl:grid xl:place-content-center"
    >
      <motion.div
        initial={{ opacity: 0, z: -25, y: 0, x: 0 }}
        animate={{ opacity: 1, z: 0, y: 0, x: 0 }}
        transition={{ duration: 0.7, type: 'easeInOut' }}
        className="w-full h-full min-w-full bg-white rounded-xl overflow-hidden xl:min-h-full"
      >
        <header className="h-14 flex justify-between items-center gap-8 px-4 border-b border-b-gray-200">
          <h4 className="text-xl text-dark font-bold">{title}</h4>
          <button type="button" onClick={closeModal} className="p-4">
            <IoMdClose size={18} />
          </button>
        </header>
        <section
          className="w-full p-4 overflow-y-scroll"
          style={{ height: 'calc(100% - 56px)' }}
        >
          {children}
        </section>
      </motion.div>
    </motion.div>,
    document.getElementById('portal') ?? document.createDocumentFragment()
  )
}

export default Modal
