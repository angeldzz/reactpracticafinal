import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
// {
//   "idJugador": 0,
//   "nombre": "string",
//   "posicion": "string",
//   "imagen": "string",
//   "fechaNacimiento": "string",
//   "pais": "string",
//   "idEquipo": 0
// }
export default class Jugador extends Component {
    url = Global.apiApuestas

    state = {
        jugador: []
    }

    loadJugador = () => {
        let request = "api/Jugadores/" + this.props.idjugador
        axios.get(this.url + request).then(response => {
            this.setState({
                jugador: response.data
            })
        })
    }
    componentDidMount = () => {this.loadJugador()}
    render() {
        return (
            <div className='text-center'>
                <h1>{this.state.jugador.nombre}</h1>
                <img src={this.state.jugador.imagen} alt={this.state.jugador.nombre} />
                <strong><h3>{this.state.jugador.posicion}</h3></strong>
                <p>Fecha de nacimiento : {this.state.jugador.fechaNacimiento}</p>
                <p>{this.state.jugador.pais}</p>
                <NavLink className="btn btn-success" to={"/jugadores/" + this.state.jugador.idEquipo}>Jugadores</NavLink>
            </div>
        )
    }
}
