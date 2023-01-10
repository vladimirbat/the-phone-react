import { render } from '@testing-library/react';

import SearchInputBox from './search-input-box';

describe('SearchInputBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchInputBox />);
    expect(baseElement).toBeTruthy();
  });
});
