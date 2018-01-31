// Link.react.test.js
import React from 'react';
import AppView from '../components/app-view';
import renderer from 'react-test-renderer';
import {
    StaticRouter
} from 'react-router-dom';

it('renders without even crashing', () => {
  const component = renderer.create(
    <AppView />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});