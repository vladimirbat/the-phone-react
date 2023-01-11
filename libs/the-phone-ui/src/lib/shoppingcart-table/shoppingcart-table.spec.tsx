import { render } from '@testing-library/react';

import ShoppingcartTable from './shoppingcart-table';

describe('ShoppingcartTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShoppingcartTable />);
    expect(baseElement).toBeTruthy();
  });
});
