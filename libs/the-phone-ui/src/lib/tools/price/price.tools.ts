import { PriceOption } from "@the-phone/commons";

export function getFirstPrice(price: PriceOption[]): string {
  if(!price || price.length === 0) {
    return 'Consultar cuota';
  }
  const value = price.find((option) => option?.price);
  return formatPrice(value?.price);
}

export function formatPrice(value:number | undefined): string {
  if(!value) {
    return 'Consultar cuota';
  }
  return value.toLocaleString() + '€';
}

export function getPriceForColor(price: PriceOption[], colorCode: string): string {
  const option = price.find((priceOption)=> priceOption.color.code === colorCode);
  return formatPrice(option?.price);
}

export function getCheapestPrice(prices: PriceOption[]): string {
  if (!prices || prices.length === 0) {
    return 'Consultar cuota';
  }
  let minValue = 1000000;
  prices.forEach((option) => {
    if (option.price && option.price < minValue) {
      minValue = option.price;
    }
  });
  return formatPrice(minValue != 1000000 ? minValue : undefined);
}

export function parseNumberPrice(strPrice: string): number | undefined {
  const value = parseFloat(strPrice);
  return value ? value : undefined;
}