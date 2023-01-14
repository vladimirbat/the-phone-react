import { KeyValueObject } from "@the-phone/commons";
import { ViewsRegistry } from "./views-registry";

export interface RouterController {
  navigateToView(viewName: ViewsRegistry, params: KeyValueObject<string>[]): void;
  getCurrentView(): Promise<ViewsRegistry | undefined>;
}