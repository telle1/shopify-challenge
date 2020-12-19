import { render, screen } from '@testing-library/react';
import App from './App';

test('renders The Shoppies', () => {
  render(<App />);
  const theShoppiesElement = screen.getByText(/The Shoppies/i);
  expect(theShoppiesElement).toBeInTheDocument();
});
