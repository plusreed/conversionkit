import React from 'react';
import ReactDOM from 'react-dom';
import UpdateToast from '../../../app/components/UpdateToast';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateToast />, div);
  ReactDOM.unmountComponentAtNode(div);
});
