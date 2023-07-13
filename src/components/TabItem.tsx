import { type ReactElement } from 'react'
import { type IconType } from 'react-icons'

interface Props {
  children: ReactElement
  label: string
  icon?: IconType
  text?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TabItem({ children, label, icon, text }: Props) {
  return children
}

export default TabItem
