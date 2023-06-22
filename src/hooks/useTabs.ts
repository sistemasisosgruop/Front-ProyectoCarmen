import { useState } from 'react'

export const useTabs = initialTab => {
  const [activeTab, setActiveTab] = useState(initialTab)

  const switchTab = tabIndex => {
    setActiveTab(tabIndex)
  }

  return { activeTab, switchTab }
}
