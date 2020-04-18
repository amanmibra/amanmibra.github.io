import React, { Component } from 'react';
import {
  Icon,
  Item,
} from 'semantic-ui-react';

import * as covid from './../../../images/covid.png';
import * as nutrics from './../../../images/nutrics.png';

class ResearchItems extends Component {

  render() {
    return (
      <div>
        <Item.Group divided>
          <Item>
            <Item.Image rounded src={nutrics} size="small"/>

            <Item.Content>
              <Item.Header>
                Nutrics
                <a style={{ marginLeft: '4px'}} href="https://github.com/Big-Ideas-Lab/nutrics" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>Adaptive recommendation model for nutrition and physical activity</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> January 2020 - Ongoing
              </Item.Description>
              <Item.Description>
                Worked on the team that built the food word embeddings, and recommendation model that uses a user's food and nutritional preferences and physical activity data from wearables The food recommendations and suggestions were based on local resturant options using resturant food nutrition datasets. The product will be a mobile application that communicates with the wearables connected to the phone.
              </Item.Description>
              <Item.Extra>Skills: Natural Language Processing, Word2Vec, Python, Jupyter Notebook, Django, ExpressJS</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={covid} size="small"/>

            <Item.Content>
              <Item.Header>
                Covidentify
                <a style={{ marginLeft: '4px'}} href="https://covidentify.org/" target="_blank">
                  <Icon name="linkify"/>
                </a>
                <a style={{ marginLeft: '4px'}} href="http://github.com/big-Ideas-Lab/" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>Adaptive recommendation model for nutrition and physical activity</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> March 2020 - Ongoing
              </Item.Description>
              <Item.Description>
                Our team of doctors and scientists are investigating whether the data from your smartphone and smartwatch can help determine whether or not you have a COVID-19 infection, and how severe the infection is expected to get. The ability to detect coronavirus (COVID-19) earlier using information from devices like smartphones, smartwatches and step counters would help us stop the spread of the virus and predict when someone may need more intensive care. If we can achieve this, we may be able to save more lives.
              </Item.Description>
              <Item.Description>
                <a
                  target="_blank"
                  href="https://covidentify.org/in-the-news/"
                >
                  <b>Covidentify in The News</b>
                </a>
              </Item.Description>
              <Item.Extra>Skills: ExpressJS, MongoDB, Fitbit API, Garmin API</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }

}

export default ResearchItems;
