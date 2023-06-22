import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  icon: JSX.Element
  label: string
}

function TabItem({ children, icon, label }: Props) {
  return <div className="bg-white px-8 py-4">{children}</div>
}

export default TabItem
