import { render } from '@testing-library/react';
import PreviewSection from './PreviewSection';

describe('<PreviewSection/>', () => {
  test('renders PreviewSection component', () => {
    const { getByTestId } = render(<PreviewSection />);
    expect(getByTestId('PreviewSection')).toBeInTheDocument();
  });
});
