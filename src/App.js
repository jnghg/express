import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import InstarMaincontainer from './instarClone/containers/InstarMainContainer';

class App extends Component {
  render() {
      return (
        <div>
            <Route exact path="/" component={InstarMaincontainer} />
        </div>
    );
  }
}

export default App;
