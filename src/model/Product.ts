export type ProductDownloadType = string | undefined | null | URL;

export interface Product {
  title: string;
  price: number;
  description: string;
  onSale: boolean;
  tags: Array<string>;
  downloadURL?: ProductDownloadType;
  type: ProductTypes
}

export enum ProductTypes {
  physical,
  downloadable
}