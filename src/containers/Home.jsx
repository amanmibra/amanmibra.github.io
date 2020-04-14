import React, { Component } from 'react';

import Typed from 'react-typed';
import { Image } from 'semantic-ui-react';

import * as logo from './../images/logo.gif'

class Home extends Component {

  render() {
    const initString = 'I am <b>Aman Ibrahim</b>, a software engineer. <br /> I am also a'

    const strings = [`${initString} Manchester United fan.`, `${initString} Mustang owner.`, `${initString} Muslim.`, `${initString} Duke Blue Devil.`, `${initString} PC and tech enthusiast.`, `${initString} North Carolinian.`, `${initString} student learning everyday.`, ]
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Image className="App-logo" src={logo} size="small"/>
          <div style={{ width: '2000px' }} className="bg-image">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
          </div>
          <div>
            <p>
              <Typed
                strings={strings}
                typeSpeed={50}
                backSpeed={50}
                backDelay={1}
                smartBackspace
              />
            </p>
          </div>
        </header>
      </div>
    );
  }

}

export default Home;
