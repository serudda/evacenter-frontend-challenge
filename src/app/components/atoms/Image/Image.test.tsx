import React from 'react';
import { render } from '@src/test-utils';
import Image from './Image';

describe('<Image/>', () => {
  test('renders Image component', () => {
    const { getByTestId } = render(<Image />);
    expect(getByTestId('Image')).toBeInTheDocument();
  });
});
