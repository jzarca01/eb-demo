// Link.react.test.js
import React from 'react';
import AppView from '../components/app-view';
import renderer from 'react-test-renderer';
import {
    StaticRouter
} from 'react-router-dom';

it('renders without crashing', () => {
  const component = renderer.create(
    <AppView />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
