import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,

      setTokens: (accessToken, refreshToken) => set({ 
        accessToken, 
        refreshToken 
      }),
      setUser: (user) => set({ user }),
      logout: () => set({ 
        accessToken: null, 
        refreshToken: null, 
        user: null 
      })
    }),
    {
      name: 'auth-storage', 
      storage: createJSONStorage(() => localStorage)
    }
  )
)