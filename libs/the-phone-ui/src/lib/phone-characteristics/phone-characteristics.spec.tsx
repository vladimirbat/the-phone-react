import { render } from '@testing-library/react';

import PhoneCharacteristics from './phone-characteristics';

describe('PhoneCharacteristics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneCharacteristics />);
    expect(baseElement).toBeTruthy();
  });
});
