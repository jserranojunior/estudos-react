import React, { Component } from 'react'
import Time from './Time'
import Partida from './Partida'

const data = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "01/06/2016",
    horario: "19h",
  },
  casa: {
    nome:"Vasco"
  },
  visitante:{
    nome:"Flamengo",
  },
};

export default class PlacarContainer extends Component {

  render() {
    return (
      <div>
        <div className="card">
        <div className="card-body">
        <div className="row">
        <div className="col-4 text-center">
            <h3>Casa</h3>
            <Time nome={data.casa.nome}/>
          </div>
          <div className="col-4 text-center"><Partida partida={data.partida}/></div>
          <div className="col-4 text-center">
          <h3>Visitante</h3>
          <Time nome={data.visitante.nome}/>
          </div>
        </div>
        </div>
        </div>
          
      </div>
    );
  }
}