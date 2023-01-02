import { PhoneView } from '@the-phone/ui';
import { useParams } from 'react-router';
import './phone-details-page.scss';

/* eslint-disable-next-line */
export interface PhoneDetailsPageProps {}

export function PhoneDetailsPage(props: PhoneDetailsPageProps) {
  let { id } = useParams();
  return (
    <div>
      <h1>Welcome to PhoneDetailsPage with id = {id}</h1>
      <PhoneView />
    </div>
  );
}

export default PhoneDetailsPage;
