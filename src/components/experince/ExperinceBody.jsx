import React, { Component } from 'react';
import {
  Header
} from 'semantic-ui-react';

import AcademicCards from './cards/AcademicCards';
import FellowshipCards from './cards/FellowshipCards';
import ResearchCards from './cards/ResearchCards';
import WorkCards from './cards/WorkCards';

class ExperinceBody extends Component {

  render() {
    const style = {
      padding: '64px',
    }
    return (
      <div>
        <Header as="h1" dividing>Academic</Header>
        <AcademicCards />
        <Header as="h1" dividing>Industry</Header>
        <WorkCards />
        <Header as="h1" dividing>Research</Header>
        <ResearchCards />
        <Header as="h1" dividing>Fellowship</Header>
        <FellowshipCards />
      </div>
    );
  }

}

export default ExperinceBody;
