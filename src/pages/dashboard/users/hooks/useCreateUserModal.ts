import { create } from 'zustand'

export interface UseCreateStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useCreateUserModal = create<UseCreateStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))
