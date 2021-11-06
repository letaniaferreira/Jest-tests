import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWhitSpaces } from './App';
// import { replaceCamelWhitSpaces } from './App';

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
});

test('checkbox disables button on first click and enables button after second click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();

});

test('disabled button renders gray and returns to red when enabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', 'Disable button');

  // disable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});
});

test('eneabled button to make blue, diable rendering gray and return to blue when enabled again', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', 'Disable button');

  // change button to blue
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // disable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
});

describe('spaces before camel-case Capital letters', () => {
  test('works for no inner capital letter', () => {
    expect(replaceCamelWhitSpaces('Red')).toBe('Red');
  }) ;
  test('works for one inner capital letter', () => {
    expect(replaceCamelWhitSpaces('MidnightBlue')).toBe('Midnight Blue');

  })
  test('workes with multiple inner capitals', () => {
    expect(replaceCamelWhitSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });

});