import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Routes from '../../app/Routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routes />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(<Routes />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});