import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user : null,
      isLoggedIn : false,
      login : (email) => set({user : {email : email}, isLoggedIn: true}),
      logout : () => set({user : null, isLoggedIn: false}),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }    
  )
)
