// Link.react.test.js
import React from 'react';
import AppView from '../components/app-view';
import {shallow} from 'enzyme';

it('renders without even crashing', () => {
  shallow(<AppView />);
});