interface Props {
  children: JSX.Element
  icon: JSX.Element
  label: string
}

// eslint-disable-next-line
const TabItem = ({ children, icon, label }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  )
}

export default TabItem

