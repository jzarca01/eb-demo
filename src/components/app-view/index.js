import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';

import {
  Link
} from 'react-router-dom';

import ContentView from '../content-view';

export default class AppView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical inverted>
          
          {this.props.menu && this.props.menu.hasOwnProperty("items") && this.props.menu.items.map((item, index) => 
            <Menu.Item name={item.name} key={index}>
              <Icon name={item.icon} />
                <Link to={item.link}>{item.name}</Link>
            </Menu.Item>
          )}
          
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <ContentView/>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>  
    );
  };
};