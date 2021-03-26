import { render } from '@src/test-utils';
import App from './App';

describe('<App/>', () => {
  test('renders App component', async () => {
    const { findByTestId } = render(<App />);
    const app = await findByTestId('App');
    expect(app).toBeInTheDocument();
  });
});
