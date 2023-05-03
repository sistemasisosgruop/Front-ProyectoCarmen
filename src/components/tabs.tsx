import { useState } from 'react'

interface Props {
  children: JSX.Element[]
}

const Tabs = ({ children }: Props): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className='flex flex-col'>
      <div className='bg-green flex justify-between md:justify-start md:bg-transparent'>
        {children.map((child, index) => (
          <button
            key={index}
            className={`inline-flex justify-center items-center gap-2 py-2 px-4 border-t-2 border-t-green font-bold ${activeTab === index ? 'bg-white text-green' : 'bg-green text-white'} md:px-8`}
            onClick={() => { setActiveTab(index) }}
          >
            {child.props.icon}
            <span>
              {child.props.label}
            </span>
          </button>
        ))}
      </div>
      <div>
        {children[activeTab]}
      </div>
    </div>
  )
}

export default Tabs
