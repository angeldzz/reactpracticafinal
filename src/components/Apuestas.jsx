import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
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
      <div>
        <table className='table table-striped'>
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
