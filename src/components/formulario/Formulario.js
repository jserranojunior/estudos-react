import React, { Component } from 'react'


export default class Formulario extends Component {
    constructor() {
        super()
        this.state = {
            nome: "",
            sexo: "",
            escola: "",
        }
    }

    onChange = (evento) => {
        const state = Object.assign({}, this.state)
        const campo = evento.target.name;
        state[campo] = evento.target.value;
        this.setState(state)
    }

    onSubmit = (evento) => {
        evento.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center">Formulario</h2>
                    Nome: {this.state.nome}<br />
                    Sexo: {this.state.sexo}<br />
                    Escola: {this.state.escola}
                    <div className="col-6">                   
                            <label htmlFor="nome" className="">Nome</label>
                            <input className="form-control" name="nome" value={this.state.nome} onChange={this.onChange} type="text" />
                            <label className="">Sexo</label>
                            <input type="radio" className="form-control" name="sexo" value="masculino" onChange={this.onChange} checked={this.state.sexo === "masculino"} />
                            <input type="radio" className="form-control" name="sexo" value="feminino" onChange={this.onChange} checked={this.state.sexo === "feminino"} />
                            <select name="escola" id="escola" className="form-control" onChange={this.onChange} value={this.state.escola}>
                                <option value=""></option>
                                <option value="1">Escola 1</option>
                                <option value="2">Escola 2</option>
                            </select>
                            <button className="btn btn-primary" onClick={this.onSubmit}> ENVIAR </button>                        
                    </div>
                </div>
            </div>
        )
    }
}