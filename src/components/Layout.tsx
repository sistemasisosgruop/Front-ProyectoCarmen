import { useEffect } from 'react'
import Header from './layouts/Header'

interface Props {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title }: Props): JSX.Element => {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout

