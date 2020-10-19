import React from 'react';
import renderer from 'react-test-renderer'
import NotFoundPage from '../../../app/pages/404';

it('matches snapshot', () => {
  const tree = renderer
    .create(<NotFoundPage />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
