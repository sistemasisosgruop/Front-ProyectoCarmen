import { useEffect } from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'

interface Props {
  children: React.ReactNode
  title: string
}

const LayoutPage = ({ children, title }: Props): JSX.Element => {
  useEffect(() => {
    document.title = `${title} - Carmen: Agencia de Viajes Y Turismo`
  }, [title])

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
