import React, { Component } from 'react';
import {
  Container,
  Icon,
  Image,
  Menu
} from 'semantic-ui-react';

import * as logo from './../../images/logo.gif'

class NavBar extends Component {

  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' href="/" header>
              <Image src={logo} className="App-logo" size="mini"/>
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name="user" />
              About Me
            </Menu.Item>

            <Menu.Item as='a'>
              <Icon name="briefcase" />
              My Experince
            </Menu.Item>

            <Menu.Item as='a'>
              <Icon name="code" />
              My Projects
            </Menu.Item>

            <Menu.Item as='a'>
              <Icon name="file" />
              My Resume
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }

}

export default NavBar;
