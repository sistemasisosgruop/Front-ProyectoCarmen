import { useEffect } from 'react'
import { useToggleSidebar } from '@hooks/useToggleSidebar'
import { motion } from 'framer-motion'
import Header from '../sidebar/Header'
import Sidebar from '../sidebar/Sidebar'

const AdminLayout = ({ children, title }) => {
  const { isShowSidebar, openSidebar, closeSidebar } = useToggleSidebar()

  useEffect(() => {
    document.title = `${title} -  Carmen Agencia de Viajes y Turismo`
  }, [title])

  return (
    <div className="h-full max-w-full xl:flex xl:justify-start xl:items-start">
      {isShowSidebar && (
        <motion.div
          initial={{ height: 0, x: -120, y: -150, opacity: 0 }}
          animate={{ height: 'auto', x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sidebar closeSidebar={closeSidebar} />
        </motion.div>
      )}
      <div className="hidden xl:inline-block xl:h-screen">
        <Sidebar />
      </div>

      <div className="w-full h-full bg-gray-300">
        <Header openSidebar={openSidebar} />

        <div className="max-w-full flex flex-col justify-start items-center overflow-y-scroll px-4 pt-8 pb-4 w-section h-section">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
