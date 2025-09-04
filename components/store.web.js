import { create } from "zustand";

export const useUserStore = create(
  (set) => ({
      user : null,
      isLoggedIn : false,
      login : (email) => set({user : {email : email}, isLoggedIn: true}),
      logout : () => set({user : null, isLoggedIn: false}),
}));
