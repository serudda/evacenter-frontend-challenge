import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('<Avatar/>', () => {
  test('renders Avatar component', () => {
    const { getByTestId } = render(<Avatar altText="alt text" />);
    expect(getByTestId('Avatar')).toBeInTheDocument();
  });
});
