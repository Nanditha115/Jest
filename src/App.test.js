import { render, screen } from '@testing-library/react';
import App from './App';

test('renders inc and dec h1', () => {
  render(<App />);
  const h1Element = screen.getByText(/inc and dec/i);
  expect(h1Element).toBeInTheDocument();
});

