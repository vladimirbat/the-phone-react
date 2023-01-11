import { emmitAndWaitForResponse, EventEmitter, EventsRegistry, Product, SessionData, SessionRegistry, ShoppingcartItem, shoppingcartItemsEqual } from '@the-phone/commons';
import { PhoneView } from '@the-phone/ui';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './phone-details-page.scss';

/* eslint-disable-next-line */
export interface PhoneDetailsPageProps {}

export function PhoneDetailsPage(props: PhoneDetailsPageProps) {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (id) {
      emmitAndWaitForResponse<string, Product>(EventsRegistry.REQUEST_PHONE, EventsRegistry.RESPONSE_PHONE, id).then((prod: Product) => setProduct(prod));
    }
  }, [id]);
  return <div>{id && product ? <PhoneView product={product} iWantIt={(newItem) => processIWantIt(newItem)} /> : null}</div>;
}

function processIWantIt(shoppingcartItem: ShoppingcartItem): void {
  saveSelectedPhone(shoppingcartItem);
  EventEmitter.eventEmmiterFactory(EventsRegistry.PHONE_SELECTED_FOR_BUYING).emitEvent(shoppingcartItem.phone.id);
}

export default PhoneDetailsPage;

function saveSelectedPhone(shoppingcartItem: ShoppingcartItem) {
  const SHOPPINGCART_ARRAY = SessionRegistry.SHOPPINGCART_ARRAY;
  let shoppingcartArray = SessionData.getObject<ShoppingcartItem[]>(SHOPPINGCART_ARRAY);
  shoppingcartArray = shoppingcartArray ? shoppingcartArray : [];
  const found = shoppingcartArray.find((item) => shoppingcartItemsEqual(item, shoppingcartItem));
  if (found) {
    found.quantity++;
  } else {
    shoppingcartArray.push(shoppingcartItem);
  }
  SessionData.setObject(SHOPPINGCART_ARRAY, shoppingcartArray);
}
