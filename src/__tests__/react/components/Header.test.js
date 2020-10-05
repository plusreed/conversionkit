import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../app/components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains text when text prop is passed', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header text={"hey"} />, div)
  expect(div.innerHTML).toMatch(/hey/)
})

it('says \'ConversionKit\' when no text is provided', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
  expect(div.innerHTML).toMatch(/ConversionKit/)
})