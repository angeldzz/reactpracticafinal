import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, useParams } from "react-router-dom";
import MenuRutas from './MenuRutas';
import Home from './Home';
import Equipos from './Equipos';
import Jugadores from './Jugadores';
import Jugador from './Jugador';
import Apuestas from './Apuestas';
import CrearApuesta from './CrearApuesta';
export default class Router extends Component {
  render() {
    function ElementEquipo () {
        let {id} = useParams()
        return(<Equipos id={id}/>)
    }
    function ElementJugadores () {
        let {idequipo} = useParams()
        return(<Jugadores idequipo={idequipo}/>)
    }
    function ElementJugador () {
        let {idjugador} = useParams()
        return(<Jugador idjugador={idjugador}/>)
    }
    return (
        <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/apuestas' element={<Apuestas/>}/>
            <Route path='/crearapuesta' element={<CrearApuesta/>}/>
            <Route path='/equipo/:id' element={<ElementEquipo/>}/>
            <Route path='/jugadores/:idequipo' element={<ElementJugadores/>}/>
            <Route path='/jugador/:idjugador' element={<ElementJugador/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
