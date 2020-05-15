import React from 'react';
import Login from './View/Login.js'
import Projects from './View/Projects';
import Graphics from './View/Graphics';
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
   <BrowserRouter>
     <Switch>
       <Route exact path='/' component={Login}/>
        <Route path='/Projects' component={Projects}/>
        <Route path='/Graphics' component={Graphics}/>
     </Switch>
   </BrowserRouter> 
   
  );
}

export default App;
