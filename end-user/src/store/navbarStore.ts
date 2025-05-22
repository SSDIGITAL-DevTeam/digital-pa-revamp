import { create } from 'zustand'

type State = {
    isNavbarOpen: boolean
    isServiceOpen: boolean
    updateNavbar: (data : boolean) => void
    updateService: (data : boolean) => void
}

export const useFooterStore = create<State>((set) => ({
  isNavbarOpen: false,
  isServiceOpen: false,
  updateNavbar: (data : boolean) => set({ isNavbarOpen: data }),
  updateService: (data : boolean) => set({ isServiceOpen: data }),
}))
