import React from 'react';
import Login from './View/Login.js'
import Projects from './View/Projects';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

const App =() => {
  return (
    <BrowserRouter>
    <Switch>
  <Route exact path="/" component={Login} />
  <Route path="/Projects" component={Projects} />
</Switch>
    </BrowserRouter>)
}

export default App;
