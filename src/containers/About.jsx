import React, { Component } from 'react';
import {
  Card,
  Container,
  Grid,
  Icon,
  Image,
} from 'semantic-ui-react';

import NavBar from './../components/navbar';

import * as aman from './../images/aman.jpeg';

class About extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-body">
          <Container fluid >
            <Card centered style={{ width: '45%'}}>
              <Card.Content>
                <Card.Header>Aman Ibrahim 🇪🇷</Card.Header>
                <Card.Meta>ML Platform @ Cruise</Card.Meta>
              </Card.Content>
              <Card.Content>
                  <Grid divided stackable padded verticalAlign="middle" columns={2}>
                    <Grid.Column>
                      <Image wrapped rounded src={aman} size="medium"/>
                    </Grid.Column>
                    <Grid.Column stretched>
                      <Card.Description>
                        <div>
                          <p>
                            I grew up in Raleigh, NC, and graduated from Duke on May 2020 with a Bachelor of Science in Computer Science.
                          </p>
                          <p>
                            I have great experince in Full Stack Web Development as I have worked in the front-end, back-end, and DevOps on multiple web applications. I have worked on projects on all stages from early planning to testing to launch and production.
                          </p>
                          <p>
                            My current interest is in the sphere of Artifical Intelligence, in particular to Machine Learning and Natural Language Processing. I am looking towards gaining more experince in this field through industry and graduate school.
                          </p>
                        </div>
                      </Card.Description>
                    </Grid.Column>
                  </Grid>

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
