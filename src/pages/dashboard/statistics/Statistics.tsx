import { motion } from 'framer-motion'
import AdminLayout from '@layouts/AdminLayout'
import HorizontalChart from './components/HorizontalChart'
import VerticalChart from './components/VerticalChart'
import Heading from '@components/Heading'

function Statistics() {
  return (
    <AdminLayout title="Estadísticas">
      <Heading title="Estadísticas" />

      <motion.div
        initial={{ opacity: 0, x: 0, y: 25 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, type: 'easeInOut' }}
        className="w-full max-w-full flex flex-col justify-center items-center gap-16"
      >
        <VerticalChart />
        <HorizontalChart />
      </motion.div>
    </AdminLayout>
  )
}

export default Statistics
