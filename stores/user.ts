import { defineStore } from "pinia";

interface IUserStore {
  isMenuOverlay: boolean;
  isLoading: boolean;
  cart: any[];
  checkout: any[];
}

export const useUserStore = defineStore("user", {
  state: (): IUserStore => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
  }),
  persist: true,
});
