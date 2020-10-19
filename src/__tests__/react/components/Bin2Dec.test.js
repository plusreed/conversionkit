import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Bin2Dec from '../../../app/components/Bin2Dec';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bin2Dec />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('matches snapshot', () => {
  const tree = renderer
    .create(<Bin2Dec />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
