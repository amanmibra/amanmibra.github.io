import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import HomeBody from './../components/home';

class Home extends Component {

  render() {
    return (
      <div>
        { window.innerWidth <= 760 ?
          <Redirect to="/about" />
          :
          <HomeBody />
        }
      </div>
    );
  }

}

export default Home;
