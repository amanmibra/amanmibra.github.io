import React, { Component } from 'react';

import HomeBody from './../components/home';
import HomeMobile from '../components/home/HomeMobile';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="desktop">
          <HomeBody />
        </div>
        <div className="mobile">
          <HomeMobile />
        </div>
      </div>
    );
  }

}

export default Home;
