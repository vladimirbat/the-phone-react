import { PhonesUseCase } from "../app/phones-module/phones-domain/phones.use-case";
import { FetchPhonesApi } from "../infrastructure/fetch-api";
import { PhonesApi } from "./adapters/fetch-api";
import { DomainFlow } from "./domain.flow";

export class AppDomain{
    private fetchApi: PhonesApi;
    private domainFlow: DomainFlow;
    private phonesUseCase: PhonesUseCase;

    constructor(){
        console.log('Constructor AppDomain');
        this.fetchApi = new FetchPhonesApi();
        this.phonesUseCase = new PhonesUseCase(this.fetchApi);
        this.domainFlow = new DomainFlow(this.fetchApi);
    }

    start(){
        console.log('AppDomain started')
    }
}