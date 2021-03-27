import { render } from '@testing-library/react';
import HistoryItem from './HistoryItem';

describe('<HistoryItem/>', () => {
  test('renders HistoryItem component', () => {
    const { getByTestId } = render(<HistoryItem id="1" name="test" downloadUrl="url" />);
    expect(getByTestId('HistoryItem')).toBeInTheDocument();
  });
});
