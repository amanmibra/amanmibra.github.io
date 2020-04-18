import React, { Component } from 'react';
import {
  Header,
} from 'semantic-ui-react';

import CodingItems from './items/CodingItems';
import ResearchItems from './items/ResearchItems';

class ProjectsBody extends Component {

  render() {
    return (
      <div>
        <Header as="h1" dividing>Research Projects</Header>
        <ResearchItems />
        <Header as="h1" dividing>Coding Projects</Header>
        <CodingItems />
      </div>
    );
  }

}

export default ProjectsBody;
