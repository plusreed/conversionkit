import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import UpdateToast from '../../../app/components/UpdateToast';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateToast />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(<UpdateToast />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});