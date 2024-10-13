import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the page header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { level: 1 });
  expect(headerElement).toHaveTextContent('todos');
});
