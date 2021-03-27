import { render } from '@testing-library/react';
import RiskCard, { Type } from './RiskCard';

describe('<RiskCard/>', () => {
  test('renders RiskCard component', () => {
    const { getByTestId } = render(<RiskCard type={Type.default} />);
    expect(getByTestId('RiskCard')).toBeInTheDocument();
  });

  test('should show a Low message', () => {
    const { getByTestId } = render(<RiskCard type={Type.positive} />);
    expect(getByTestId('RiskCard')).toHaveTextContent('Low');
  });

  test('should show a Mid message', () => {
    const { getByTestId } = render(<RiskCard type={Type.warning} />);
    expect(getByTestId('RiskCard')).toHaveTextContent('Mid');
  });

  test('should show a High message', () => {
    const { getByTestId } = render(<RiskCard type={Type.negative} />);
    expect(getByTestId('RiskCard')).toHaveTextContent('High');
  });
});
