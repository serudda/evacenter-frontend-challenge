import { render } from '@testing-library/react';
import EmptyState from './EmptyState';

describe('<EmptyState/>', () => {
  test('renders EmptyState component', () => {
    const { getByTestId } = render(<EmptyState title="test" />);
    expect(getByTestId('EmptyState')).toBeInTheDocument();
  });
});
