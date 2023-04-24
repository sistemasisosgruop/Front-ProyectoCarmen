import { useEffect } from 'react'
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
      <div className='pb-20 mt-[154px]'>
        {children}
      </div>
    </>
  )
}

export default LayoutPage

