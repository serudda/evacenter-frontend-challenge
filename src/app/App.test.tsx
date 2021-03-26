import { render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  test('renders App component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('App')).toBeInTheDocument();
  });
});
