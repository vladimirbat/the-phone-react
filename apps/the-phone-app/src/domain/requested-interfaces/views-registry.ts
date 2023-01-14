export const enum ViewsRegistry {
  PHONES_VIEW = 'PHONES_VIEW',
  PHONE_VIEW = 'PHONE_VIEW',
  SHOPPINGCART_VIEW = 'SHOPPINGCART_VIEW',
}

const _viewLevelsArray: { [key: string]: number } = {
  PHONES_VIEW: 0,
  PHONE_VIEW: 1,
  SHOPPINGCART_VIEW: 2,
};

export function convertViewRegistryToFlowLevel(view: ViewsRegistry): number {
  return _viewLevelsArray[view];
}
