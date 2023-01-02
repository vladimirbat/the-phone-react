import { render } from '@testing-library/react';

import PhonesSearchPage from './phones-search-page';

describe('PhonesSearchPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhonesSearchPage />);
    expect(baseElement).toBeTruthy();
  });
});
