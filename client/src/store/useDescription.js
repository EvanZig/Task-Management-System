import { create } from 'zustand'

export const useDescription = create((set) => ({
  description: '',
  isActive: false,
  setDescription: (description) => set({ description }),
  setIsActive: (isActive) => set({ isActive }),
}))
