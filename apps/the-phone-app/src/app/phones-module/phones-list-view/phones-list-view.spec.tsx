import { render } from '@testing-library/react';

import PhonesListView from './phones-list-view';

describe('PhonesListView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhonesListView />);
    expect(baseElement).toBeTruthy();
  });
});
