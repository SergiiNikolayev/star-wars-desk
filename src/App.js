import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home'
import Pages from "./components/Pages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path={['/planets', '/spaceships','/vehicles','/people','/films','/species']} component={Pages}/>
{/*          <Route path={'/spaceships'} component={Pages}/>
          <Route path={'/vehicles'} component={Pages}/>
          <Route path={'/people'} component={Pages}/>
          <Route path={'/films'} component={Pages}/>
          <Route path={'/species'} component={Pages}/>*/}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
