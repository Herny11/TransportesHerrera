import React from 'react';
import { Cartwidget } from './CartWidget';
import './Input/styles.css'


export const NavBar = ()=>{
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href='index.html'>Transportes Herrera</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">Servicios</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">Contáctanos</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="index.html">Action</a>
          <a className="dropdown-item" href="index.html">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="index.html">Something else here</a>
        </div>
      </li>
      <li>
        <Cartwidget />
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )}