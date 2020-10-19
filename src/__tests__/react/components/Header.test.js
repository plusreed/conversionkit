import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
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

it('matches snapshot when no text is provided', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});

it('matches snapshot when text is provided', () => {
  const tree = renderer
    .create(<Header text={"hey"} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});