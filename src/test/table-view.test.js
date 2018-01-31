// Link.react.test.js
import React from 'react';
import TableView from '../components/table-view';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const component = renderer.create(
    <TableView />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});