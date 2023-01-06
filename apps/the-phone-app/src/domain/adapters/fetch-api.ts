import { Product, SearchPhonesRequest, SearchPhonesResponse } from '@the-phone/commons';

export interface PhonesApi {
  searchPhones(request: SearchPhonesRequest): Promise<SearchPhonesResponse>;
  searchPhone(id: string): Promise<Product | null> 
}
