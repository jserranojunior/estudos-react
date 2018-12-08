import React, { Component } from 'react'


export default class Partida extends Component {

  render() {
    return (
     <div>
         <h4>Partida</h4>
         <div>
             <h5>
             <span>{this.props.partida.data}</span>
             <span> - </span>
             <span>{this.props.partida.horario}</span>
             </h5>
         </div>
     </div>
    );
  }
}