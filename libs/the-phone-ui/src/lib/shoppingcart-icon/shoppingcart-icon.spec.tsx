import { render } from '@testing-library/react';

import ShoppingcartIcon from './shoppingcart-icon';

describe('ShoppingcartIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShoppingcartIcon />);
    expect(baseElement).toBeTruthy();
  });
});
