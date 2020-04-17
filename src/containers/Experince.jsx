import React, { Component } from 'react';
import {
  Container,
} from 'semantic-ui-react';

import ExperinceBody from '../components/experince';
import NavBar from './../components/navbar';

class Experince extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-body">
          <Container textAlign="left">
            <ExperinceBody />
          </Container>
        </div>
      </div>
    );
  }

}

export default Experince;
