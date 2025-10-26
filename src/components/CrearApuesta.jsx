import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
export default class CrearApuesta extends Component {
    state = {
        status: false
    }
    url = Global.apiApuestas
    cajaUsuario = React.createRef()
    cajaResultados = React.createRef()
    cajaFecha = React.createRef()
    crearApuesta = (event) => {
        event.preventDefault();
        let request = "api/Apuestas"
        let apuesta = {
            id: 0,
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaResultados.current.value,
            fecha: this.cajaFecha.current.value
        }
        axios.post(this.url + request, apuesta).then(() => {
            console.log("Apuesta Creada");
            this.setState({
                status:true
            })
        })
    }
  render() {
    return (
      <div>
        <h1>Nueva Apuesta</h1>
        <form>
            <label>Usuario</label>
            <input type="text" ref={this.cajaUsuario}/>
            <label>Resultado</label>
            <input type="text" ref={this.cajaResultados}/>
            <label>Fecha</label>
            <input type="text" ref={this.cajaFecha}/>
            <button className='btn btn-primary' onClick={this.crearApuesta}>Realizar Apuesta</button>
        </form>
      {
        this.state.status === true &&
            <Navigate to="/apuestas"></Navigate>
      }
      </div>
    )
  }
}
