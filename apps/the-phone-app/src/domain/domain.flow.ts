import { EventReceiver, EventsRegistry, SessionData, SessionRegistry } from '@the-phone/commons';
import { NavigationEvents } from './requested-interfaces/navigation-events';
import { RouterController } from './requested-interfaces/router-controller';
import { ViewsRegistry } from './requested-interfaces/views-registry';

export class DomainFlow {
  private _currentView: ViewsRegistry = ViewsRegistry.PHONES_VIEW;

  public get currentView(): ViewsRegistry {
    return this._currentView;
  }
  private set currentView(value: ViewsRegistry) {
    this._currentView = value;
    SessionData.setString(SessionRegistry.CURRENT_PAGE, this._currentView);
  }

  constructor(private routerController: RouterController, private navigationEvents: NavigationEvents) {
    this.routerController.getCurrentView().then((view) => (this.currentView = view ? view : ViewsRegistry.PHONES_VIEW));
    this.navigationEvents.subscribeToDisplayPhone((id) => this.displayPhoneHandler(id));
    this.navigationEvents.subscribeToBuyPhone((id) => this.buyPhoneHandler(id));
    this.navigationEvents.subscribeToGoToShoppingcart(() => this.goToShoppingcartHandler());
    this.navigationEvents.subscribeToGoToSearchPhones(() => this.goToSearchPhonesHandler());
  }

  displayPhoneHandler(id: string): void {
    this.routerController.navigateToView(ViewsRegistry.PHONE_VIEW, [{ id: id }]);
    this.currentView = ViewsRegistry.PHONE_VIEW;
  }

  buyPhoneHandler(id: string): void {
    this.routerController.navigateToView(ViewsRegistry.SHOPPINGCART_VIEW, []);
    this.currentView = ViewsRegistry.SHOPPINGCART_VIEW;
  }

  goToShoppingcartHandler(): void {
    this.routerController.navigateToView(ViewsRegistry.SHOPPINGCART_VIEW, []);
    this.currentView = ViewsRegistry.SHOPPINGCART_VIEW;
  }

  goToSearchPhonesHandler(): void {
    this.routerController.navigateToView(ViewsRegistry.PHONES_VIEW, []);
    this.currentView = ViewsRegistry.PHONES_VIEW;
  }
}
