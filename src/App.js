import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import InstarMaincontainer from './instarClone/containers/InstarMainContainer';
import InstarLoginContainer from './instarClone/containers/InstarLoginContainer';
import SignUpView from './instarClone/views/SignUpView';

class App extends Component {
  render() {
      return (
        <div>
          <Switch>
            <Route path="/signUp" component={SignUpView} />
            <Route path="/login" component={InstarLoginContainer} />
            <Route path="/" component={InstarLoginContainer} />
          </Switch>
          <Route exact path="/main" component={InstarMaincontainer} />
        </div>
    );
  }
}

export default App;
