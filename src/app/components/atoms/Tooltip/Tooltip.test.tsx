import { render, waitFor } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('<Tooltip/>', () => {
  test('renders Tooltip component', async () => {
    const { getByTestId } = render(
      <Tooltip text="tooltip">
        <div>Test</div>
      </Tooltip>,
    );
    await waitFor(() => {
      expect(getByTestId('Tooltip')).toBeInTheDocument();
    });
  });
});
