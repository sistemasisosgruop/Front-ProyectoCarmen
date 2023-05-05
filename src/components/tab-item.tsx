interface Props {
  children: React.ReactNode
  icon: JSX.Element
  label: string
}

const TabItem = ({ children, icon, label }: Props): JSX.Element => {
  return (
    <div className='bg-white px-8 py-4'>
      {children}
    </div>
  )
}

export default TabItem
