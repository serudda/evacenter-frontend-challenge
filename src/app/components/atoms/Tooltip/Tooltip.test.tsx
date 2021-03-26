import { render } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('<Tooltip/>', () => {
  test('renders Tooltip component', async () => {
    const { findByTestId } = render(
      <Tooltip text="tooltip">
        <div>Test</div>
      </Tooltip>,
    );
    const tooltip = await findByTestId('Tooltip');
    expect(tooltip).toBeInTheDocument();
  });
});
