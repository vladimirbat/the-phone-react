import { PhonesUseCase } from "../app/phones-module/phones-domain/phones.use-case";
import { FetchPhonesApi } from "../infrastructure/fetch-api";
import { WebRouterController } from "../infrastructure/web-router-controller";

import { PhonesApi } from './requested-interfaces/fetch-api';
import { RouterController } from './requested-interfaces/router-controller';
import { DomainFlow } from './domain.flow';
import { NavigationEvents } from './requested-interfaces/navigation-events';
import { WebNavigationEvents } from '../infrastructure/web-navigation-events';

export class AppDomain {
  private fetchApi: PhonesApi;
  private domainFlow: DomainFlow;
  private phonesUseCase: PhonesUseCase;
  private routerController: RouterController;
  private navigationEvents: NavigationEvents;

  constructor() {
    console.log('Constructor AppDomain');
    this.fetchApi = new FetchPhonesApi();
    this.phonesUseCase = new PhonesUseCase(this.fetchApi);
    this.routerController = new WebRouterController();
    this.navigationEvents = new WebNavigationEvents();
    console.log('routerController', this.routerController);
    this.domainFlow = new DomainFlow(this.routerController, this.navigationEvents);
  }

  start() {
    console.log('AppDomain started');
  }
}