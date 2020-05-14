import React from 'react';
import Login from './View/Login.js'
import Projects from './View/Projects';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { projectsInfo, tasksInfo, userInfo } from './librery/functionsApiCalls';

const dataProjects = projectsInfo();
const datatasks = tasksInfo();
const dataUser = userInfo();

const App =() => {
const dataProjects = projectsInfo();
const datatasks = tasksInfo();
const dataUser = userInfo();
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
