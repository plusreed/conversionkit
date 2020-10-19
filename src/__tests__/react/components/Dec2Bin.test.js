import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Dec2Bin from '../../../app/components/Dec2Bin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dec2Bin />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(<Dec2Bin />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
