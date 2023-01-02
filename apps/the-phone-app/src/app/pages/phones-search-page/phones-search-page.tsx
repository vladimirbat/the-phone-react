import './phones-search-page.scss';
import PhonesListView from '../../phones-module/phones-list-view/phones-list-view';

/* eslint-disable-next-line */
export interface PhonesSearchPageProps {}

export function PhonesSearchPage(props: PhonesSearchPageProps) {
  return (
    <div className="phones-search-page">
      <PhonesListView />
    </div>
  );
}

export default PhonesSearchPage;
