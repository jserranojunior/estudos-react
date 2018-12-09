import React, { Component } from 'react'
import { connect } from 'react-redux'


 class TodoLIst extends Component {
  constructor(){
    super()
    this.state = {
      inputTarefas:"",
    }
  }

  onChange = (evento) => {
    evento.preventDefault()
    const state = Object.assign({}, this.state)
    state[evento.target.name] = evento.target.value 
    this.setState(state)    
  }

  submitAddTask = (evento) => {
    evento.preventDefault()     
    this.props.dispatch({type:"ADD_TASK", name: this.state.inputTarefas})
    this.setState({
      inputTarefas:''
    })
    
  }

  render = () => {
    return (
      <div className="card"> 
          <div className="card-body">
            <h2 className="text-center">Lista de Tarefas</h2>            
           <label htmlFor="tarefa"></label>
            <input className="form-control" name="inputTarefas" value={this.state.inputTarefas} onChange={this.onChange} type="text"/>
           <button onClick={this.submitAddTask}> mudar </button>
          </div>

          {this.props.tarefas.map((task, index) => {
            return(<p key={index}>{task.name}</p>)
          })}

      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  tarefas: state.todolist.tarefas
})

export default connect(mapStateToProps)(TodoLIst)