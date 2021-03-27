import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('<Navbar/>', () => {
  test('renders Navbar component', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('Navbar')).toBeInTheDocument();
  });
});
