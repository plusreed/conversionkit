import React from 'react';
import ReactDOM from 'react-dom';
import Dec2Hex from '../../../app/components/Dec2Hex';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dec2Hex />, div);
  ReactDOM.unmountComponentAtNode(div);
});
