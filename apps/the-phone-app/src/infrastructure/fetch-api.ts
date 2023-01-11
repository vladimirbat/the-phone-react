import { Product, SearchPhonesRequest, SearchPhonesResponse } from '@the-phone/commons';
import { API_URL } from '../consts/api.const';
import { PhonesApi } from '../domain/requested-interfaces/fetch-api';

export class FetchPhonesApi implements PhonesApi {
  searchPhones(request: SearchPhonesRequest): Promise<SearchPhonesResponse> {
    const { page, pageSize, query } = request;
    const url = `${API_URL}/products?page=${page}&pageSize=${pageSize}&query=${query}`;
    return fetch(url).then((response) => response.json());
  }

  searchPhone(id: string): Promise<Product | null> {
    if (!id) {
      return Promise.resolve(null);
    }
    const url = `${API_URL}/products?id=${id}`;
    return fetch(url)
      .then((response) => this.parseResponse<SearchPhonesResponse | null>(response))
      .then((phResponse: SearchPhonesResponse | null) => (phResponse && phResponse.products && phResponse.products.length ? phResponse.products[0] : null));
  }
  parseResponse<T>(response: Response): Promise<T | null> {
    try {
      return response.json().then((value) => {
        return value;
      });
    } catch (error) {
      console.log('Error y parse JSON of ', response.url, response.body);
      return Promise.resolve(null);
    }
  }
}
