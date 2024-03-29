import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">Delivery Tracking</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="main">Main</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="checkout">Check Out</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link to="login"> <button className="btn btn-outline-success  mx-2" type="submit">LogIn</button></Link>
      <Link to="signup"> <button className="btn btn-outline-danger mx-2" type="submit">Sign Up</button></Link>
      </form>
    </div>
  </div>
</nav> 
    </>
  )
}
