import React from 'react';
import ReactDOM from 'react-dom';
import Fallback from '../../../app/components/Fallback';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fallback />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/** @todo: This needs a test for the `text` prop. */