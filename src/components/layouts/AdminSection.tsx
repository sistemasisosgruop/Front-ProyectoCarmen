import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function AdminSection({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 25 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, type: 'easeInOut' }}
      className="max-w-full bg-white p-8 rounded-xl"
    >
      {children}
    </motion.div>
  )
}

export default AdminSection
