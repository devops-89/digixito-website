import { create } from "zustand";


interface HOME_PAGE_STORE<T = Record<string, any>> {
  pageData: T | null;
  setPageData: (data: T) => void;
  cleanPageData: () => void;
}

export const useHomepageData = create<HOME_PAGE_STORE>((set) => ({
  pageData: null,
  setPageData: (pageData) => set({ pageData }),
  cleanPageData: () => set({ pageData: null }),
}));