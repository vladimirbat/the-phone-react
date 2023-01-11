export interface NavigationEvents {
  subscribeToDisplayPhone(callback: (id: string) => void): void;
  subscribeToBuyPhone(callback: (id: string) => void): void;
}
