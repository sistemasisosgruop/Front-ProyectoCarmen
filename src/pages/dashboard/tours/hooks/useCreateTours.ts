import { ModalStore } from 'types/modalStore'
import { create } from 'zustand'

export const useCreateTours = create<ModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))
