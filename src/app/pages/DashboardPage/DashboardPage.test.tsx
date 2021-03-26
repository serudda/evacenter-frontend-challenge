import { render } from '@testing-library/react';
import DashboardPage from './DashboardPage';

describe('<DashboardPage/>', () => {
  test('renders DashboardPage component', () => {
    const { getByTestId } = render(<DashboardPage />);
    expect(getByTestId('DashboardPage')).toBeInTheDocument();
  });
});
