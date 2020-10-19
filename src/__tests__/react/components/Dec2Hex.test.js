import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Dec2Hex from '../../../app/components/Dec2Hex';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dec2Hex />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(<Dec2Hex />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});