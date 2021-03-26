import { render } from '@testing-library/react';
import RiskCard, { Type } from './RiskCard';

describe('<RiskCard/>', () => {
  test('renders RiskCard component', () => {
    const { getByTestId } = render(<RiskCard type={Type.default} />);
    expect(getByTestId('RiskCard')).toBeInTheDocument();
  });
});
