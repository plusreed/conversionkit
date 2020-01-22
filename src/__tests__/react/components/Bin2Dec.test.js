import React from 'react';
import ReactDOM from 'react-dom';
import Bin2Dec from '../../../app/components/Bin2Dec';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bin2Dec />, div);
  ReactDOM.unmountComponentAtNode(div);
});
