import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

interface Props {
  children: React.ReactNode
  title: string
}

const LayoutPage = ({ children, title }: Props): JSX.Element => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = `${title} - Carmen: Agencia de Viajes Y Turismo`
    window.scrollTo(0, 0)
  }, [title, pathname])

  return (
    <>
      <Header />
      <div className='mt-[154px]'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default LayoutPage
