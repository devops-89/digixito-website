import { create } from "zustand";

interface DETAILS_STORE<T = Record<string, any>> {
  data: T | null;
  setData: (details: T) => void;
  clearData: () => void;
}

export const useDetailsStore = create<DETAILS_STORE>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  clearData: () => set({ data: null }),
}));
