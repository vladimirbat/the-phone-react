import { Product } from "../../model/products.model";

export class SearchPhonesRequest {
  constructor(public page: number = 1, public pageSize: number = 12, public query: string = '') {
  }
  public static createDefaultRequest(): SearchPhonesRequest{
    return new SearchPhonesRequest();
  }
}

export interface SearchPhonesResponse {
    total:number;
    page:number;
    pageSize: number;
    products: Product[];
}
