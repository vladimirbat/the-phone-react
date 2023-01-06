import {
  emmitAndWaitForResponse,
  EventEmitter,
  EventsRegistry,
  Product,
} from '@the-phone/commons';
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
      emmitAndWaitForResponse<string, Product>(
        EventsRegistry.REQUEST_PHONE,
        EventsRegistry.RESPONSE_PHONE,
        id
      ).then((prod: Product) => setProduct(prod));
    }
  }, [id]);
  return (
    <div>
      {id && product ? (
        <PhoneView product={product} iWantIt={(event) => processIWantIt(id)} />
      ) : null}
    </div>
  );
}

function processIWantIt(id: string): void {
  EventEmitter.eventEmmiterFactory(
    EventsRegistry.PHONE_SELECTED_FOR_BUYING
  ).emitEvent(id);
}

export default PhoneDetailsPage;
