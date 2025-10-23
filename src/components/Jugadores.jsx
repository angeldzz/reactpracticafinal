import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Jugadores extends Component {
//     [
//   {
//     "idJugador": 0,
//     "nombre": "string",
//     "posicion": "string",
//     "imagen": "string",
//     "fechaNacimiento": "string",
//     "pais": "string",
//     "idEquipo": 0
//   }
// ]
    url = Global.apiApuestas

    state = {
      jugadores: []
    }

    loadJugadores = () => {
        let request = "api/Jugadores/JugadoresEquipos/" + this.props.idequipo
        console.log(this.url + request);
        axios.get(this.url + request).then(response =>{
          console.log(response.data);
          this.setState({
            jugadores: response.data
          })
        })
    }
    componentDidMount = () => this.loadJugadores()
  render() {
    return (
      <div className='text-center'>
        <NavLink className="btn btn-primary" to={"/equipo/" + this.props.idequipo}>Volver</NavLink>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>imagen</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                  this.state.jugadores.map((jugador,index) => {
                    return(
                      <tr key={index}>
                        <td>{jugador.nombre}</td>
                        <td><img style={{width:"100px"}} src={jugador.imagen} alt={jugador.nombre}/></td>
                        <td><NavLink to={"/jugador/" + jugador.idJugador} className="btn btn-danger">Detalles</NavLink></td>
                      </tr>
                    )
                  })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
