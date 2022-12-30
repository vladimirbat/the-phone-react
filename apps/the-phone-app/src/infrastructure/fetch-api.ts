import { SearchPhonesRequest, SearchPhonesResponse } from "@the-phone/commons";
import { API_URL } from "../consts/api.const";
import { PhonesApi } from "../domain/adapters/fetch-api";

export class FetchPhonesApi implements PhonesApi{
  searchPhones(request: SearchPhonesRequest): Promise<SearchPhonesResponse> {
    const {page, pageSize, query} = request;
    const url = `${API_URL}/products?page=${page}&pageSize=${pageSize}&query=${query}`
    return fetch(url).then((response)=> response.json());
  }

}