import { Product, SearchPhonesRequest, SearchPhonesResponse } from "@the-phone/commons";
import { API_URL } from "../consts/api.const";
import { PhonesApi } from "../domain/adapters/fetch-api";

export class FetchPhonesApi implements PhonesApi{
  searchPhones(request: SearchPhonesRequest): Promise<SearchPhonesResponse> {
    const {page, pageSize, query} = request;
    const url = `${API_URL}/products?page=${page}&pageSize=${pageSize}&query=${query}`
    return fetch(url).then((response)=> response.json());
  }

  searchPhone(id: string): Promise<Product | null> {
    if(!id) {
      return Promise.resolve(null);
    }
    const url = `${API_URL}/products?id=${id}`;
    return fetch(url).then((response)=> this.parseResponseAndLog<SearchPhonesResponse | null>(response))
      .then((phResponse: SearchPhonesResponse | null) => phResponse && phResponse.products && phResponse.products.length ? phResponse.products[0] : null);
  }
  parseResponseAndLog<T>(response: Response): Promise<T | null>{
    let promise: Promise<T | null>; 
    try {
      promise = response.json().then((value) => {
        console.log('Value Promise: ', value); 
        return value;
      });
    } catch (error) {
      console.log('Error y parse JSON of ', response.url, response.body);
      promise = Promise.resolve(null);
    }
    return promise;
  }

}