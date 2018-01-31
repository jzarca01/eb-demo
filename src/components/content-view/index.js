import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import TableView from '../table-view';

export default class ContentView extends Component {

  render() {
      return (
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/table" component={TableView}/>
              <Route path="/topics" component={Topics}/>
          </div>
      );
  }
};

const Home = () => <p>HelloNotHome</p>;
const Topics = () => <p>Hello Topics</p>;