import React from 'react';
import ReactDOM from 'react-dom';
import Fallback from '../../../app/components/Fallback';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fallback />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text correctly', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Fallback text={"test"} />, div);
  expect(div.innerHTML).toMatch(/test/)
})

it('displays a spinner when no text is provided', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Fallback />, div)
  // when the spinner is active, a screen reader element is added.
  // this is the best way i know to check if it's working properly.
  expect(div.innerHTML).toMatch(/sr-only/)
})