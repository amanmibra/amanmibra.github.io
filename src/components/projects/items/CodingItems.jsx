import React, { Component } from 'react';

import {
  Icon,
  Item,
  Embed
} from 'semantic-ui-react';

import * as dmm from './../../../images/dmm.png';
import * as gthc from './../../../images/gthc.png';
import * as heroku from './../../../images/heroku.png';
import * as mufc from './../../../images/mufc.png';
import * as nlp from './../../../images/nlp.png';

class CodingItems extends Component {

  render() {
    return (
      <div>
        <Item.Group divided>
          <Item>
            <Item.Image rounded src={gthc} size="small"/>

            <Item.Content>
              <Item.Header>
                GTHC - Game Tenting Help Center
                <a style={{ marginLeft: '4px'}} href="https://gthc.io/" target="_blank">
                  <Icon name="linkify"/>
                </a>
                <a style={{ marginLeft: '4px'}} href="https://github.com/gthc/" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>Duke vs UNC Basketball Tenting Scheduling for Duke Students</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> February 2018 - Ongoing
              </Item.Description>
              <Item.Description>
                GTHC is a web-based scheduling tool for Duke Krzyzewskiville tenters. This platform prioritizes ease of use, organization, optimization, and collaboration for each tenter. In a single glance, GTHC will tell you the important details of your team's shifts, and with a few clicks, your team will know who, when, and what about any and all of your shifts. GTHC will also bring you updates from your team, the line monitors, and any important K-Ville news. Our end goal is to make life as a tenter easier. GTHC has had over 1000 Duke students using our plaform over the 2019 and 2020 men's basketball seasons.
              </Item.Description>
              <Item.Description>
                <p>
                  <a
                    href="https://www.dukechronicle.com/article/2020/01/duke-basketball-tenting-gthc-app-krzyzewskiville"
                    target="_blank"
                  >
                    Duke Chronicle - "GTHC, a student-made app for tenters, hits Krzyzewskiville"
                  </a>
                </p>
                <p>
                  <a
                    href="https://youtu.be/59Eyfntv6fo?t=1320"
                    target="_blank"
                  >
                    K-Ville Documentary - "IN TENTS: Welcome to Krzyzewskiville"
                  </a>
                </p>
                <p>
                  <b>Duke Basketball Inteviews GTHC team</b>
                </p>
                <Embed
                  defaultActive
                  iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/bdoCzHORP0g?start=450" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                />
              </Item.Description>
              <Item.Extra>Skills: Ruby On Rails, React, Redux, SQL, Docker, Heroku, iOS, Android</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={nlp} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Natural Language Processing - GloVe
                <a style={{ marginLeft: '4px'}} href="https://github.com/amanmibra/GloVe" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>
                Medical Record Word Embeddings
              </Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> May 2018
              </Item.Description>
              <Item.Description>
                Userd GloVe model to interpret synonyms, such as acronyms and alternative terms, used in actual patient health records.
              </Item.Description>
              <Item.Extra>Skills: Python, Natural Language Processing</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={heroku} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Heroku CLI Plugin
                <a style={{ marginLeft: '4px'}} href="https://github.com/heroku/heroku-cli-addons-admin" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>
                Heroku CLI plugin to help Heroku add-on providers integrate their services with Heroku
              </Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> Summer 2018
              </Item.Description>
              <Item.Description>
                Plugin for Heroku's CLI that allows clients to manage and create Heroku addons replacing Heroku's legacy tool known as kensa. Used by thousands of Heroku customers today.
              </Item.Description>
              <Item.Extra>Skills: Typescript, oclif</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={dmm} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Duke Major Mapper
                <a style={{ marginLeft: '4px'}} href="https://github.com/duke-major-mapper/" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>Tool to help students find their Duke major requirements</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> October 2017 - January 2018
              </Item.Description>
              <Item.Description>
                Web app that will display all of a students required courses for a certain major, including the overlapping courses between double majors. Pitched application to Duke's Office of Technology (OIT), and it helped inspire the renovation of Duke's online student hub, known as DukeHub.
              </Item.Description>
              <Item.Extra>Skills: React, Redux, CloudSQL, Google Cloud Platform</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={mufc} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Manchester United sub-reddit (/r/reddevils) Twitter bot - @reddevilsbot
                <a style={{ marginLeft: '4px'}} href="https://github.com/amanmibra/reddevils-Twitter-Bot" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>Automate Manchester United news to your twitter feed</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> October 2017 - January 2018
              </Item.Description>
              <Item.Description>
                Twitter bot that posts news about my favorite soccer team by using Reddit’s algorithm to choose the top posts of every hour.
              </Item.Description>
              <Item.Extra>Skills: NodeJS, Twitter API, Reddit API</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }

}

export default CodingItems;
