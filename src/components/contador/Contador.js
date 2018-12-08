import React, { Component } from 'react';
import { connect } from 'react-redux'


class Contador extends Component {
    
    decrementar = () => {
       this.props.dispatch({ type: "DECREMENTAR"})
    }

    incrementar = () => {
        this.props.dispatch({ type: "INCREMENTAR"})
    }

  render() {
    return (
      <div className="App">
        <card>
        <div className="card-body text-center">  
          <h2>CONTADOR</h2>
          <h3>{this.props.contador}</h3>
          <button className="btn btn-danger" onClick={this.decrementar}>-</button>    
          <button className="btn btn-success" onClick={this.incrementar}>+</button>  
        </div>        
        </card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    contador: state.contador.contador
})

export default connect(mapStateToProps)(Contador);
