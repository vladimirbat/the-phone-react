import { KeyValueObject } from "@the-phone/commons";
import { NavigateFunction } from "react-router";
import { RouterController } from '../domain/requested-interfaces/router-controller';
import { ViewsRegistry } from '../domain/requested-interfaces/views-registry';

export class WebRouterController implements RouterController {
  private static navigate: NavigateFunction = (...params) => ({});

  public static setNavigate(nav: NavigateFunction) {
    WebRouterController.navigate = nav;
  }

  public navigateToView(viewName: ViewsRegistry, params: KeyValueObject<string>[]): void {
    WebRouterController.navigate(this.getNavigationPath(viewName, params));
  }

  private getNavigationPath(viewName: ViewsRegistry, params: KeyValueObject<string>[]): string {
    console.log('getting navigation Path for', viewName);
    if (!params || !params.length) {
      return routesRegistry[viewName];
    }
    return (
      routesRegistry[viewName] +
      params
        .map((param) => {
          let path = '';
          Object.keys(param).forEach((key) => (path += `/${param[key]}`));
          return path;
        })
        .join('')
    );
  }
  concatParams(params: KeyValueObject<string>[]): string {
    return params
      .map((param) => {
        let path = '';
        Object.keys(param).forEach((key) => (path += `/${param[key]}`));
        return path;
      })
      .join('');
  }
}

const routesRegistry: {[viewName:string]: string} = {
  'PHONE_VIEW': '/phone-detail',
  'PHONES_VIEW': '/',
  'SHOPPINGCART_VIEW': '/shoppingcart'
}