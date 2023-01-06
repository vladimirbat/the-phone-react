import { render } from '@testing-library/react';

import ShoppingcartPage from './shoppingcart-page';

describe('ShoppingcartPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShoppingcartPage />);
    expect(baseElement).toBeTruthy();
  });
});
