import { render } from '@testing-library/react';
import firebase from 'firebase/app';
import DashboardPage from './DashboardPage';

beforeAll(async () => {
  await firebase.firestore().enableNetwork();
});

afterAll(async () => {
  await firebase.firestore().disableNetwork();
});

describe('<DashboardPage/>', () => {
  test('renders DashboardPage component', async () => {
    try {
      const { findByTestId } = render(<DashboardPage />);
      const dashboardPage = await findByTestId('DashboardPage');
      expect(dashboardPage).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});
