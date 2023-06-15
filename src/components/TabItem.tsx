import { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface Props {
  children: ReactNode
  label: string
  icon?: IconType
  text?: string
}

function TabItem({ children, label, icon, text }: Props) {
  return <>{children}</>
}

export default TabItem
