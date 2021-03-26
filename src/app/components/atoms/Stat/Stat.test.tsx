import { render } from '@testing-library/react';
import Stat from './Stat';

describe('<Stat/>', () => {
  test('renders Stat component', () => {
    const { getByTestId } = render(<Stat description="" />);
    expect(getByTestId('Stat')).toBeInTheDocument();
  });

  test('should show the value on screen', () => {
    const { getByTestId } = render(<Stat description="" value={24.9} />);
    expect(getByTestId('Stat')).toHaveTextContent('24.9');
  });
});
