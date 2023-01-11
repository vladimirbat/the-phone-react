import {
  EventEmitter,
  EventReceiver,
  EventsRegistry,
  Product,
  SearchPhonesRequest,
  SearchPhonesResponse,
} from '@the-phone/commons';
import { PhonesApi } from '../../../domain/requested-interfaces/fetch-api';

export class PhonesUseCase {
  responsePhonesEmitter = EventEmitter.eventEmmiterFactory(EventsRegistry.RESPONSE_PHONES);
  requestPhonesReceiver = EventReceiver.eventReceiverFactory<SearchPhonesRequest>(EventsRegistry.REQUEST_PHONES);
  responsePhoneEmitter = EventEmitter.eventEmmiterFactory(EventsRegistry.RESPONSE_PHONE);
  requestPhoneReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.REQUEST_PHONE);

  constructor(private phonesApi: PhonesApi) {
    console.log('Constructor PhonesUseCase');
    this.phonesHandler = this.phonesHandler.bind(this);
    this.phoneHandler = this.phoneHandler.bind(this);
    this.initSearchPhonesHandler();
  }

  initSearchPhonesHandler() {
    this.requestPhonesReceiver.subscribe(this.phonesHandler);
    this.requestPhoneReceiver.subscribe(this.phoneHandler);
  }

  phonesHandler(searchPhonesRequest: SearchPhonesRequest): void {
    this.phonesApi
      .searchPhones(searchPhonesRequest)
      .then((response: SearchPhonesResponse) => {
        this.responsePhonesEmitter.emitEvent<SearchPhonesResponse>(response);
      });
  }

  phoneHandler(id: string): void {
    this.phonesApi
      .searchPhone(id)
      .then((prod: Product | null) => {
        this.responsePhoneEmitter.emitEvent<Product | null>(prod);
      });
  }
}
