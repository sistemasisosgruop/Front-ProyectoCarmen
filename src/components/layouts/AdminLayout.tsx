import { useEffect } from 'react'
import { useToggleSidebar } from '../../hooks/useToggleSidebar'
import Header from '../sidebar/Header'
import Sidebar from '../sidebar/Sidebar'

interface Props {
  children: React.ReactNode
  title: string
}

const AdminLayout = ({ children, title }: Props): JSX.Element => {
  const { isShowSidebar, openSidebar, closeSidebar } = useToggleSidebar()

  useEffect(() => {
    document.title = title
  }, [])

  return (
    <div className='h-full xl:flex'>
      {isShowSidebar && (
        <Sidebar
          closeSidebar={closeSidebar}
        />
      )}
      <div className='hidden xl:inline-block'>
        <Sidebar />
      </div>

      <div className='w-full h-full bg-gray-300'>
        <Header
          openSidebar={openSidebar}
        />
        <div className='h-full overflow-y-scroll'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
