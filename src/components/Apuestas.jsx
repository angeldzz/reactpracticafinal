import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
export default class Apuestas extends Component {
  url = Global.apiApuestas
  state = {
    apuestas: []
  }
  loadApuestas = () => {
    let request = "api/Apuestas"
    axios.get(this.url + request).then(response => {
      this.setState({
        apuestas: response.data
      })
    })
  }
  componentDidMount = () => {
    this.loadApuestas();
  }
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <NavLink to="/crearapuesta" className='btn btn-danger'>Realizar Apuesta</NavLink>
        <table className='table table-striped table-light'>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Resultado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.apuestas.map((apuesta, index) => {
                return(
                  <tr key={index}>
                    <td>{apuesta.usuario}</td>
                    <td>{apuesta.resultado}</td>
                    <td>{apuesta.fecha}</td>
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
