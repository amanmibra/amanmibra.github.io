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
            <Card centered style={{ width: '30%'}}>
              <Card.Content>
                <Card.Header>Aman Ibrahim 🇪🇷</Card.Header>
                <Card.Meta>ML Platform @ Cruise</Card.Meta>
                <Card.Description>
                  <p>
                    I grew up in Raleigh, NC, and graduated from Duke on May 2020 with a Bachelor of Science in Computer Science.
                  </p>
                  <p>
                    I have great experince in Full Stack Web Development as I have worked in the front-end, back-end, and DevOps. I have worked on projects from early planning to launch and production.
                  </p>
                  <p>
                    My current interest is in the sphere of Artifical Intelligence, in particular to Machine Learning and Natural Language Processing. I am looking towards gaining more experince in this field through industry and graduate school.
                  </p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="mailto:amanmibra@gmail.com">
                  <Icon name="mail" />
                  amanmibra@gmail.com
                </a>
              </Card.Content>
              <Image wrapped src={aman}/>
            </Card>
          </Container>
        </div>
      </div>
    );
  }

}

export default About;
