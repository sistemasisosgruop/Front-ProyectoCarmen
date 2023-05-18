import { motion } from 'framer-motion'
import AdminLayout from '../../components/layouts/AdminLayout'
import HeadingText from '../../components/HeadingText'
import HorizontalChart from '../../components/statistics/HorizontalChart'
import VerticalChart from '../../components/statistics/VerticalChart'

const Statistics = (): JSX.Element => {
  return (
    <AdminLayout title='Estadísticas'>
      <HeadingText text='Estadísticas' />

      <motion.div
        initial={{ opacity: 0, x: 0, y: 25 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, type: 'easeInOut' }}
        className='w-full max-w-full flex flex-col justify-center items-center gap-16'
      >
        <VerticalChart />
        <HorizontalChart />
      </motion.div>
    </AdminLayout>
  )
}

export default Statistics
