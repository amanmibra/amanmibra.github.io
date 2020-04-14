import React from 'react';

import Typed from 'react-typed';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './stars.scss';

function App() {
  const initString = 'I am Aman Ibrahim, a software engineer. <br /> I am also a'
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ width: '2000px' }} className="bg-image">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
        <div>
          <p>
            <Typed
              strings={[`${initString} Manchester United fan.`, `${initString} Mustang owner.`, `${initString} Muslim.`, `${initString} Duke Blue Devil.`, `${initString} PC and tech enthusiast.`, `${initString} North Carolinian.`, `${initString} student learning everyday.`, ]}
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

export default App;
