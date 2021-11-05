import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// finds element with role of button and correct text
test('button has correct initial color', () => {
  render(<App />);
  const colorButtton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButtton).toHaveStyle({ backgroundColor: 'red'})
});
// finds element with role of button and correct text
test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor:'blue' });
});