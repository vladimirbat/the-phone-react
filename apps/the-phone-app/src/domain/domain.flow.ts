import { EventReceiver, EventsRegistry } from "@the-phone/commons";
import { NavigationEvents } from './requested-interfaces/navigation-events';
import { RouterController } from './requested-interfaces/router-controller';
import { ViewsRegistry } from './requested-interfaces/views-registry';

export class DomainFlow {
  private _privateCurrentView: ViewsRegistry = ViewsRegistry.PHONES_VIEW;

  public get privateCurrentView(): ViewsRegistry {
    return this._privateCurrentView;
  }

  constructor(private routerController: RouterController, private navigationEvents: NavigationEvents) {
    // this.displayPhoneHandler = this.displayPhoneHandler.bind(this);
    // this.buyPhoneHandler = this.buyPhoneHandler.bind(this);

    this.navigationEvents.subscribeToDisplayPhone((id) => this.displayPhoneHandler(id));
    this.navigationEvents.subscribeToBuyPhone((id) => this.buyPhoneHandler(id));
    this.navigationEvents.subscribeToGoToShoppingcart(() => this.goToShoppingcartHandler());
    this.navigationEvents.subscribeToGoToSearchPhones(() => this.goToSearchPhonesHandler());
  }

  displayPhoneHandler(id: string): void {
    this.routerController.navigateToView(ViewsRegistry.PHONE_VIEW, [{ id: id }]);
    this._privateCurrentView = ViewsRegistry.PHONE_VIEW;
  }

  buyPhoneHandler(id: string): void {
    this.routerController.navigateToView(ViewsRegistry.SHOPPINGCART_VIEW, []);
    this._privateCurrentView = ViewsRegistry.SHOPPINGCART_VIEW;
  }

  goToShoppingcartHandler(): void {
    this.routerController.navigateToView(ViewsRegistry.SHOPPINGCART_VIEW, []);
    this._privateCurrentView = ViewsRegistry.SHOPPINGCART_VIEW;
  }

  goToSearchPhonesHandler(): void {
    this.routerController.navigateToView(ViewsRegistry.PHONES_VIEW, []);
    this._privateCurrentView = ViewsRegistry.PHONES_VIEW;
  }
}