import { NavigationEvents } from '../domain/requested-interfaces/navigation-events';
import { EventReceiver, EventsRegistry } from '@the-phone/commons';

export class WebNavigationEvents implements NavigationEvents {
  private displayPhoneSubscriptions: ((id: string) => void)[] = [];
  private buyPhoneSubscriptions: ((id: string) => void)[] = [];
  private goToShoppingcartSubscriptions: (() => void)[] = [];
  private goToSearchPhonesSubscriptions: (() => void)[] = [];

  private requestPhoneForDisplayReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.PHONE_SELECTED_FOR_DISPLAY);
  private requestPhoneForBuyingReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.PHONE_SELECTED_FOR_BUYING);
  private requestGoToShoppingcartReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.GO_TO_SHOPPINGCART);
  private requestGoToSearchPhonesReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.GO_TO_SEARCH_PHONES);

  constructor() {
    this.requestPhoneForDisplayReceiver.subscribe((id) => this.notifyDisplayPhone(id));
    this.requestPhoneForBuyingReceiver.subscribe((id) => this.notifyBuyPhone(id));
    this.requestGoToShoppingcartReceiver.subscribe(() => this.notifyGoToShoppingcart());
    this.requestGoToSearchPhonesReceiver.subscribe(() => this.notifyGoToSearchPhones());
  }

  public subscribeToDisplayPhone(callback: (id: string) => void): void {
    this.displayPhoneSubscriptions.push(callback);
  }

  public subscribeToBuyPhone(callback: (id: string) => void): void {
    this.buyPhoneSubscriptions.push(callback);
  }

  public subscribeToGoToShoppingcart(callback: () => void): void {
    this.goToShoppingcartSubscriptions.push(callback);
  }

  public subscribeToGoToSearchPhones(callback: () => void): void {
    this.goToSearchPhonesSubscriptions.push(callback);
  }

  private notifyDisplayPhone(id: string): void {
    this.displayPhoneSubscriptions.forEach((subscription) => subscription(id));
  }

  private notifyBuyPhone(id: string): void {
    this.buyPhoneSubscriptions.forEach((subscription) => subscription(id));
  }

  private notifyGoToShoppingcart(): void {
    this.goToShoppingcartSubscriptions.forEach((subscription) => subscription());
  }

  private notifyGoToSearchPhones(): void {
    this.goToSearchPhonesSubscriptions.forEach((subscription) => subscription());
  }
}
