import { NavigationEvents } from '../domain/requested-interfaces/navigation-events';
import { EventReceiver, EventsRegistry } from '@the-phone/commons';

export class WebNavigationEvents implements NavigationEvents {
  private displayPhoneSubscriptions: ((id: string) => void)[] = [];
  private buyPhoneSubscriptions: ((id: string) => void)[] = [];

  requestPhoneForDisplayReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.PHONE_SELECTED_FOR_DISPLAY);
  requestPhoneForBuyingReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.PHONE_SELECTED_FOR_BUYING);

  constructor() {
    this.notifyDisplayPhone = this.notifyDisplayPhone.bind(this);
    this.notifyBuyPhone = this.notifyBuyPhone.bind(this);
    this.requestPhoneForDisplayReceiver.subscribe(this.notifyDisplayPhone);
    this.requestPhoneForBuyingReceiver.subscribe(this.notifyBuyPhone);
  }

  public subscribeToDisplayPhone(callback: (id: string) => void): void {
    this.displayPhoneSubscriptions.push(callback);
  }

  public subscribeToBuyPhone(callback: (id: string) => void): void {
    this.buyPhoneSubscriptions.push(callback);
  }

  private notifyDisplayPhone(id: string): void {
    this.displayPhoneSubscriptions.forEach((subscription) => subscription(id));
  }

  private notifyBuyPhone(id: string): void {
    this.buyPhoneSubscriptions.forEach((subscription) => subscription(id));
  }
}
