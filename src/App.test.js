import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { saveAs } from 'file-saver';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
