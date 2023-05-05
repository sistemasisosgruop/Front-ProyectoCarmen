import { motion } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: JSX.Element[] | JSX.Element
  className?: string
}

const Section = ({
  children,
  className = ''
}: Props): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: 0, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -0, y: 50 }}
      transition={{ duration: 0.9, type: 'easeInOut' }}
      className={`px-8 sm:px-16 md:px-24 xl:px-32 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Section
