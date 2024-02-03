import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >

       
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">{props.Home}</a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">{props.About}</a>
              
            </li>
          </ul>
        </div>

        <div className='constiner-fluid-row py-1'  >
        <div className={`form-check form-switch- ${props.mode === 'light' ? 'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" style={{ backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode ==='dark'?'white':'#042743'}} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
        <div className={`form-check form-switch- mx=-3 ${props.mode === 'red' ? '#B8860B':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMod} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" style={{ color:props.mode ==='dark'?'white':'black'}} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>



        <h1>gyguyfeuryfyefruy</h1>
        </div>
      </div>
    </nav>
  )
};











