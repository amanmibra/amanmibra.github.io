import React, { Component } from 'react';
import {
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

import * as duke from './../../images/duke.png';

class ResearchCards extends Component {

  render() {
    return (
      <Card.Group itemsPerRow={4}>
        <Card color="blue">
          <Image src={duke} size="large"/>
          <Card.Content>
            <Card.Header>Duke Big Ideas Lab</Card.Header>
            <Card.Meta>Undergraduate Researcher</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> January 2020 - August 2020
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                <b>Projects:</b>
              </p>
              <p>
                MoveIt: An adaptive recommendation model for nutrition and physical activity <br />
                <a href="http://dunn.pratt.duke.edu/team" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </p>
              <p>
                Covidentify: Wearable Tech and Covid-19 Data <br />
                <a href="https://covidentify.org/" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }

}

export default ResearchCards;
