import { PhonesUseCase } from "../app/phones-module/phones-domain/phones.use-case";
import { FetchPhonesApi } from "../infrastructure/fetch-api";
import { WebRouterController } from "../infrastructure/web-router-controller";

import { PhonesApi } from "./adapters/fetch-api";
import { RouterController } from "./adapters/router-controller";
import { DomainFlow } from "./domain.flow";

export class AppDomain{
    private fetchApi: PhonesApi;
    private domainFlow: DomainFlow;
    private phonesUseCase: PhonesUseCase;
    private routerController: RouterController;

    constructor(){
        console.log('Constructor AppDomain');
        this.fetchApi = new FetchPhonesApi();
        this.phonesUseCase = new PhonesUseCase(this.fetchApi);
        this.routerController = new WebRouterController()
        console.log('routerController', this.routerController);
        this.domainFlow = new DomainFlow(this.routerController);
    }

    start(){
        console.log('AppDomain started')
    }
}