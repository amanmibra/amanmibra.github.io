import React, { Component } from 'react';
import {
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

import * as cisco from './../../images/cisco.png';
import * as cruise from './../../images/cruise.png';
import * as duke from './../../images/duke.png';
import * as dukehealth from './../../images/dukehealth.jpg';
import * as medsender from './../../images/medsender.png';
import * as salesforce from './../../images/salesforce.png';
import * as twitter from './../../images/twitter.png';

class WorkCards extends Component {

  render() {
    return (
      <Card.Group itemsPerRow={4}>
        <Card color="orange">
          <Image src={cruise} />
          <Card.Content>
            <Card.Header>Cruise</Card.Header>
            <Card.Meta>Incoming Software Engineer</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> August 2020 - Ongoing
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              AV - Machine Learning Platform
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="blue">
          <Image src={duke} size="large"/>
          <Card.Content>
            <Card.Header>Duke Innovation Co-lab</Card.Header>
            <Card.Meta>Full Stack Engineer and Software Consultant</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> August 2018 - August 2020
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              Engineering Productivity - PaaS (Platform as a Service)
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="orange">
          <Image src={cruise} />
          <Card.Content>
            <Card.Header>Cruise</Card.Header>
            <Card.Meta>Infrastructure Software Engineering Intern</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2019 - August 2019
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              Engineering Productivity - PaaS (Platform as a Service)
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="teal">
          <Image src={salesforce} size="large"/>
          <Card.Content>
            <Card.Header>Salesforce (Heroku)</Card.Header>
            <Card.Meta>Software Engineering Intern</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2018 - August 2018
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              Ecosystem Team
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="purple">
          <Image src={medsender} size="big"/>
          <Card.Content>
            <Card.Header>Medsender</Card.Header>
            <Card.Meta>Full Stack Intern & Co-Op</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> New York, NY
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> June 2017 - May 2018
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              Full Stack
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="blue">
          <Image src={dukehealth} size="big"/>
          <Card.Content>
            <Card.Header>Duke Cancer Institute of Health</Card.Header>
            <Card.Meta>Web Developer</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2017 - August 2017
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              Full Stack
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="teal">
          <Image src={twitter} size="big"/>
          <Card.Content>
            <Card.Header>Twitter</Card.Header>
            <Card.Meta>#EarlyBird</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2017
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              College freshman code bootcamp dedicated to minorities in the tech industry. Competitively worked on teams to hack together a new tweet feature for Twitter, which we presented to multiple engineers and the Twitter CEO.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="red">
          <Image src={cisco} size="big"/>
          <Card.Content>
            <Card.Header>Cisco</Card.Header>
            <Card.Meta>Network Engineer Consultant Shadow</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Raleigh-Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2015 - August 2015
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              Program for high school students in the RDU Triangle Area to gain experince in the tech industry.
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }

}

export default WorkCards;
