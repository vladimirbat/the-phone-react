export interface NavigationEvents {
  subscribeToDisplayPhone(callback: (id: string) => void): void;
  subscribeToBuyPhone(callback: (id: string) => void): void;
  subscribeToGoToShoppingcart(callback: () => void): void;
  subscribeToGoToSearchPhones(callback: () => void): void;
}
