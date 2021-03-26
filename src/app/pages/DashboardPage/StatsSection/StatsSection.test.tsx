import { render } from '@testing-library/react';
import StatsSection from './StatsSection';

describe('<StatsSection/>', () => {
  test('renders StatsSection component', () => {
    const { getByTestId } = render(<StatsSection />);
    expect(getByTestId('StatsSection')).toBeInTheDocument();
  });
});
