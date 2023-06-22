import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

interface Props {
  options: {
    path: string
    label: string
    icon: IconType
  }[]
}

function Options({ options }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0, y: 25 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, type: 'easeInOut' }}
      className="flex flex-wrap justify-center items-center gap-16 p-4"
    >
      {options.map((option, index) => (
        <Link
          key={index}
          to={option.path}
          className="bg-white w-64 h-48 rounded-xl text-dark text-center font-bold flex flex-col justify-center items-center gap-1 shadow"
        >
          <span className="uppercase text-2xl">{option.label}</span>
          {option.icon}
        </Link>
      ))}
    </motion.section>
  )
}

export default Options
