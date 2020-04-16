import React, { Component } from 'react';
import {
  Header
} from 'semantic-ui-react';

import FellowshipCards from './FellowshipCards';
import ResearchCards from './ResearchCards';
import WorkCards from './WorkCards';

class ExperinceBody extends Component {

  render() {
    const style = {
      padding: '64px',
    }
    return (
      <div>
        <Header as="h1" dividing>Industry Experince</Header>
        <WorkCards />
        <Header as="h1" dividing>Research Experince</Header>
        <ResearchCards />
        <Header as="h1" dividing>Fellowship Experince</Header>
        <FellowshipCards />
      </div>
    );
  }

}

export default ExperinceBody;
