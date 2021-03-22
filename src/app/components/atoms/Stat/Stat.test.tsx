import React from 'react';
import { render, screen } from '@testing-library/react';
import Stat from './Stat';

describe('<Stat/>', () => {
  test('renders Stat component', () => {
    const { getByTestId } = render(<Stat description="" />);
    expect(getByTestId('Stat')).toBeInTheDocument();
  });
});
