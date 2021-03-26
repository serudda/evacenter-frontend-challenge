import { render } from '@testing-library/react';
import HistorySection from './HistorySection';

describe('<HistorySection/>', () => {
  test('renders HistorySection component', () => {
    const { getByTestId } = render(<HistorySection list={[]} />);
    expect(getByTestId('HistorySection')).toBeInTheDocument();
  });
});
