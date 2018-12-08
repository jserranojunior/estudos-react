import React, { Component } from 'react'
import { connect } from 'react-redux'


class Time extends Component {

   
    addGolCasa = () =>{
        this.props.dispatch({ type: "ADD_GOL_CASA"})
    }

    addGolVisitante = () =>{
        this.props.dispatch({ type: "ADD_GOL_VISITANTE"})
    }
    

  render() {
    if(this.props.nome === "Vasco"){
        this.gol = this.props.golsCasa;
        this.addGol = this.addGolCasa
        }else if(this.props.nome === "Flamengo"){
            this.gol = this.props.golsVisitante;
            this.addGol = this.addGolVisitante
        }else{
            console.log(this.props.nome)
        }
      
    return (
        <div>
            <h3>
                {this.props.nome}

            </h3>
            <div>{this.gol}</div>
            <button className="btn btn-primary" onClick={this.addGol}>GOL</button>   
                 
        </div>
        
    );
  }
}

const mapStateToProps = (state) => (
    {
    golsCasa: state.placar.golsCasa,
    golsVisitante: state.placar.golsVisitante
}
)

export default connect(mapStateToProps)(Time);