export interface Product {
  id: string;
  imgUrl: string;
  brand: string;
  model: string;
  price: PriceOption[];
  cpu: string;
  ram: string;
  so: string;
  displayResolution: string;
  battery: string;
  dimentions: string;
  weight: string;
  primaryCamera: string[] | string;
  secondaryCamera: string;
  options: ColorAndStorageOptions;
}

export interface ColorAndStorageOptions {
  colors: DeviceVariantOption[];
  storage: DeviceVariantOption[];
}

export interface PriceOption {
  color: DeviceVariantOption;
  storage: DeviceVariantOption;
  price: number;
}

export interface DeviceVariantOption {
  code: string;
  name: string;
}

export const PRODUCT_LABELS:ProductLabels = { 'es': {
  brand: 'Marca',
  cpu: 'CPU',
  ram: 'RAM',
  so: 'Sistema operativo',
  displayResolution: 'Resolución',
  battery: 'Batería',
  dimentions: 'Dimensiones',
  weight: 'Peso',
  primaryCamera: 'Cámara Principal',
  secondaryCamera: 'Cámara Secundaria',
}}

export type ProductLabels = { [key:string]: ProductLanguageLabels}

export type ProductLanguageLabels = {
  brand: string,
  cpu: string,
  ram: string,
  so: string,
  displayResolution: string,
  battery: string,
  dimentions: string,
  weight: string,
  primaryCamera: string,
  secondaryCamera: string,
};