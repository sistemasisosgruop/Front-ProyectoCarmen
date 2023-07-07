import { create } from 'zustand'

export interface UseLoginStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useLoginModal = create<UseLoginStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))
