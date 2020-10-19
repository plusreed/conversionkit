import React from 'react';
import renderer from 'react-test-renderer'
import Index from '../../../app/pages';

it('matches snapshot', () => {
  const tree = renderer
    .create(<Index />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
