import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import TableView from '../table-view';

export default class ContentView extends Component {

  constructor(props) {
    super(props);
  };

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

const Home = () => <p>Hello Home</p>;
const Topics = () => <p>Hello Topics</p>;