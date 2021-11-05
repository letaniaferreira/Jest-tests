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

test('initial conditions', () => {
  render(<App />);
  //check that button starts up enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  //check that checkbox starts out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})

test('checkbox disables button on first click and enables button after second click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox');

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();

})