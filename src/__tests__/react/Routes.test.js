import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../../app/Routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
