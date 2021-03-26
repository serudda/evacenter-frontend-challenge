import { render } from '@testing-library/react';
import DashboardPage from './DashboardPage';

describe('<DashboardPage/>', () => {
  test('renders DashboardPage component', async () => {
    const { findByTestId } = render(<DashboardPage />);
    const dashboardPage = await findByTestId('DashboardPage');
    expect(dashboardPage).toBeInTheDocument();
  });
});
