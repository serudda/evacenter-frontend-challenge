import { render } from '@testing-library/react';
import Image from './Image';

describe('<Image/>', () => {
  test('renders Image component', () => {
    const { getByTestId } = render(<Image />);
    expect(getByTestId('Image')).toBeInTheDocument();
  });
});
