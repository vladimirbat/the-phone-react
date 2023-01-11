import { EventReceiver, EventsRegistry } from "@the-phone/commons";
import { RouterController } from "./adapters/router-controller";
import { ViewsRegistry } from "./adapters/views-registry";

export class DomainFlow {
    privateCurrentView: ViewsRegistry = ViewsRegistry.PHONES_VIEW;
    requestPhoneForDisplayReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.PHONE_SELECTED_FOR_DISPLAY);
    requestPhoneForBuyingReceiver = EventReceiver.eventReceiverFactory<string>(EventsRegistry.PHONE_SELECTED_FOR_BUYING);
    constructor(private routerController: RouterController){
        this.displayPhoneHandler = this.displayPhoneHandler.bind(this);
        this.initBuyPhoneSubscription = this.initBuyPhoneSubscription.bind(this);
        this.buyPhoneHandler = this.buyPhoneHandler.bind(this);
        this.initDisplayPhoneSubscription();
        this.initBuyPhoneSubscription();
    }
    initDisplayPhoneSubscription(){
        this.requestPhoneForDisplayReceiver.subscribe(this.displayPhoneHandler);
        
    }
    displayPhoneHandler(id: string): void {
        this.routerController.navigateToView(ViewsRegistry.PHONE_VIEW, [{id:id}]);
        this.privateCurrentView = ViewsRegistry.PHONE_VIEW;
    }

    initBuyPhoneSubscription(){
        this.requestPhoneForBuyingReceiver.subscribe(this.buyPhoneHandler);
    }
    buyPhoneHandler(id: string): void {
        this.routerController.navigateToView(ViewsRegistry.SHOPPINGCART_VIEW, []);
        this.privateCurrentView = ViewsRegistry.SHOPPINGCART_VIEW;
    }
}