import React from 'react';
import ReactDOM from 'react-dom';
import WhyUse from '../../../app/pages/WhyUse';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhyUse />, div);
  ReactDOM.unmountComponentAtNode(div);
});
