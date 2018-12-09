import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from '../redux/store'
// import Contador from './contador/Contador'
// import Placar from './placar/PlacarContainer'
// import Formulario from './formulario/Formulario'
// import TodoList from './todolist/TodoList'
import Financeiro from './financeiro/Financial-Index'
// import ExemploAxios from './axios/exemplo'


class App extends Component {
  render() {
    return (
      <Provider store={store}>             
   
        <div className="container">
        {/* <ExemploAxios/> */}
        <Financeiro/>
        {/* <TodoList/>
        <Contador/>
        <Placar/>
        <Formulario/> */}
        
        </div>
        
          
      </Provider>
    );
  }
}

export default App;
