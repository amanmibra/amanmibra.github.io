import React, { Component } from 'react';
import {
  Container,
  Divider,
  Icon,
  Item,
  Segment,
} from 'semantic-ui-react';

import NavBar from './../components/navbar';

import * as aman from './../images/aman.jpeg';

class About extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-body">
          <Container>
            <Segment>
              <Item.Group divided>
                <Item>
                  <Item.Image rounded src={aman} size="medium"/>

                  <Item.Content verticalAlign="middle">
                    <Item.Header>Aman Ibrahim 🇪🇷</Item.Header>
                    <Item.Meta>Machine Learning Platform @ <b>Cruise</b></Item.Meta>
                    <Divider />
                    <Item.Description>
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
                    </Item.Description>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Content>
                    <a href="mailto:amanmibra@gmail.com">
                      <Icon name="mail" />
                      amanmibra@gmail.com
                    </a>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Container>
        </div>
      </div>
    );
  }

}

export default About;
