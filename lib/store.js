import { create } from "zustand";

/**
 * Your store is a hook! You can put anything in it: primitives, objects, functions.
 * State has to be updated immutably and the set function merges state to help it.
 */
export const useStore = create((set, get) => ({
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  navigationData: undefined,
  setNavigationData: (navigationData) => set({ navigationData }),
  footerData: undefined,
  setFooterData: (footerData) => set({ footerData }),
  isTouch: false,
  setIsTouch: (isTouch) => set({ isTouch }),
}));
