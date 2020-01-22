import React from 'react';
import ReactDOM from 'react-dom';
import Dec2Bin from '../../../app/components/Dec2Bin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dec2Bin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
