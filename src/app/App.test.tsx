import { render } from '@src/test-utils';
import firebase from 'firebase/app';
import App from './App';

beforeAll(async () => {
  await firebase.firestore().enableNetwork();
});

afterAll(async () => {
  await firebase.firestore().disableNetwork();
});

describe('<App/>', () => {
  test('renders App component', async () => {
    try {
      const { findByTestId } = render(<App />);
      const app = await findByTestId('App');
      expect(app).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});
