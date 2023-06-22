import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

function Section({ children, className = '' }: Props) {
  return <div className={`px-8 sm:px-16 md:px-24 xl:px-32 ${className}`}>{children}</div>
}

export default Section
