import { useState } from "react";

interface HookData {
  isShowSidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useToggleSidebar = (): HookData => {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);

  const openSidebar = (): void => {
    setIsShowSidebar(true);
  };

  const closeSidebar = (): void => {
    setIsShowSidebar(false);
  };

  return { isShowSidebar, openSidebar, closeSidebar };
};
