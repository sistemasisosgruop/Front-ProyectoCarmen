import { useEffect } from 'react'
import Footer from '../Footer'
import Header from '../header/Header'

interface Props {
  children: React.ReactNode
  title: string
}

const LayoutPage = ({ children, title }: Props): JSX.Element => {
  useEffect(() => {
    document.title = title
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

