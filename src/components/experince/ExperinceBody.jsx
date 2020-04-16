import React, { Component } from 'react';
import {
  Header
} from 'semantic-ui-react';

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
        <Header as="h1" dividing>Fellowship Experince</Header>
      </div>
    );
  }

}

export default ExperinceBody;
