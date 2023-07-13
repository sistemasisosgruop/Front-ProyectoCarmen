import { create } from 'zustand'

interface UseCounterStore {
  counter: number
  inc: () => void
}

export const useCounter = create<UseCounterStore>((set) => ({
  counter: 0,
  inc: () => set((state) => ({ counter: state.counter + 1 }))
}))
