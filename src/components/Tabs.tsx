import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  tabContainerStyles: string
  contentContainerStyles?: string
  tabStyle?: string
  activeTabStyle?: string
  inactiveTabStyle?: string
  textTabStyle?: string
  activeTab?: string
  switchTab: (index: number) => void
}

function Tabs({
  children,
  tabContainerStyles = 'flex justify-start items-center',
  contentContainerStyles = 'bg-white py-8 px-y md:px-8',
  tabStyle = 'px-4 py-2',
  activeTabStyle = 'bg-blue text-white',
  inactiveTabStyle = 'bg-white text-dark',
  textTabStyle = 'bg-dark text-white',
  activeTab,
  switchTab
}: Props) {
  return (
    <section>
      <div className={tabContainerStyles}>
        {children.map((child, index) => (
          <button
            key={index}
            type="button"
            className={`min-h-full flex justify-center items-center gap-2 ${tabStyle} ${
              activeTab === index ? activeTabStyle : inactiveTabStyle
            } hover:bg-opacity-90`}
            onClick={() => {
              switchTab(index)
            }}
          >
            {child.props?.text !== undefined && (
              <div className={`w-10 h-10 rounded-full grid place-content-center ${textTabStyle}`}>
                {child.props?.text}
              </div>
            )}
            {child.props?.icon !== undefined && <>{child.props?.icon}</>}
            <span>{child.props?.label}</span>
          </button>
        ))}
      </div>
      <div className={`${contentContainerStyles}`}>{children[activeTab]}</div>
    </section>
  )
}

export default Tabs
