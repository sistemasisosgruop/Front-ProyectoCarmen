import { useState } from "react";

interface HookData {
  isOpenMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useToggleMenu = (): HookData => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const openMenu = (): void => {
    setIsOpenMenu(true);
  };

  const closeMenu = (): void => {
    setIsOpenMenu(false);
  };

  return { isOpenMenu, openMenu, closeMenu };
};
