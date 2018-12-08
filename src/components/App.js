import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from '../redux/store'
import Contador from './contador/Contador'
import Placar from './placar/PlacarContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>             
   
        <div className="container">
        <Contador/>
        <Placar/>
        </div>
        
          
      </Provider>
    );
  }
}

export default App;
