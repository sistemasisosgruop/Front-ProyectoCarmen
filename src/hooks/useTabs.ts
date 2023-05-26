import { useState } from "react";

interface TabsState {
  activeTab: number;
  switchTab: (tabIndex: number) => void;
}

export const useTabs = (initialTab: number = 0): TabsState => {
  const [activeTab, setActiveTab] = useState<number>(initialTab);

  const switchTab = (tabIndex: number): void => {
    setActiveTab(tabIndex);
  };

  return { activeTab, switchTab };
};
