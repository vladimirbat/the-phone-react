import {
  EventEmitter,
  EventReceiver,
  EventsRegistry,
  SearchPhonesRequest,
  SearchPhonesResponse,
} from '@the-phone/commons';
import { PhonesApi } from '../../../../src/domain/adapters/fetch-api';

export class PhonesUseCase {
  responsePhonesEmitter = EventEmitter.eventEmmiterFactory(EventsRegistry.RESPONSE_PHONES);
  requestPhonesReceiver = EventReceiver.eventReceiverFactory<SearchPhonesRequest>(EventsRegistry.REQUEST_PHONES);

  constructor(private phonesApi: PhonesApi) {
    console.log('Constructor PhonesUseCase');
    this.phonesHandler = this.phonesHandler.bind(this);
    this.initSearchPhonesHandler();
  }

  initSearchPhonesHandler() {
    this.requestPhonesReceiver.subscribe(this.phonesHandler);
  }

  phonesHandler(searchPhonesRequest: SearchPhonesRequest): void {
    this.phonesApi
      .searchPhones(searchPhonesRequest)
      .then((response: SearchPhonesResponse) => {
        this.responsePhonesEmitter.emitEvent<SearchPhonesResponse>(response);
      });
  }
}
