import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import WhyUse from '../../../app/pages/WhyUse';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhyUse />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('matches snapshot', () => {
  const tree = renderer
    .create(<WhyUse />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
