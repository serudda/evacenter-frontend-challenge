import { render } from '@testing-library/react';
import Avatar from './Avatar';

describe('<Avatar/>', () => {
  test('renders Avatar component', () => {
    const { getByTestId } = render(<Avatar altText="test" />);
    expect(getByTestId('Avatar')).toBeInTheDocument();
  });
});
