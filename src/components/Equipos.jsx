import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
// {
//   "idEquipo": 0,
//   "nombre": "string",
//   "imagen": "string",
//   "champions": 0,
//   "web": "string",
//   "descripcion": "string",
//   "finalista": 0
// }
export default class Equipos extends Component {
  url = Global.apiApuestas
  state = {
    equipo: []
  }
  loadEquipo = () => {
      let request = "api/Equipos/" + this.props.id 
      axios.get(this.url + request).then(response => {
        this.setState({
          equipo: response.data
        })
      })
  }
  componentDidMount = () => {
    this.loadEquipo()
  }
  componentDidUpdate = (oldProps) => {
    if(oldProps.id !== this.props.id){
      this.loadEquipo() 
    }
  }
  render() {
    return (
      <div className='text-center'>
        <h1>{this.state.equipo.nombre}</h1>
        <img style={{width:"300px"}} src={this.state.equipo.imagen} alt="" />
        <h3>Champions: {this.state.equipo.champions}</h3>
        <p>{this.state.equipo.descripcion}</p>
        <NavLink className="btn btn-success" to={"/jugadores/" + this.state.equipo.idEquipo}>Jugadores</NavLink>
        <NavLink className="btn btn-primary" to="/">Volver</NavLink>
      </div>
    )
  }
}
