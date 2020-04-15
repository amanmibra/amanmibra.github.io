import React, { Component } from 'react';
import {
  Card,
  Container,
  Icon,
  Image,
} from 'semantic-ui-react';

import NavBar from './../components/navbar';

import * as aman from './../images/aman.jpeg';

class About extends Component {

  render() {
    return (
      <div style={{ color: "blue"}}>
        <NavBar />
        <div className="page-body">
          <Container fluid textAlign='center'>
            <Card centered>
              <Image src={aman} />
              <Card.Content>
                <Card.Header>Aman Ibrahim</Card.Header>
                <Card.Meta>ML Platform @ Cruise</Card.Meta>
                <Card.Description>
                  I grew up in Raleigh, NC, and graduated from Duke on May 2020 with a Bachelor of Science in Computer Science.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="mailto:amanmibra@gmail.com">
                  <Icon name="mail" />
                  amanmibra@gmail.com
                </a>
              </Card.Content>
            </Card>
          </Container>
        </div>
      </div>
    );
  }

}

export default About;
