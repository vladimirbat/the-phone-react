import { render } from '@testing-library/react';

import WaitingSpiner from './waiting-spiner';

describe('WaitingSpiner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WaitingSpiner />);
    expect(baseElement).toBeTruthy();
  });
});
