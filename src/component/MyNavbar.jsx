import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { ChartCounter } from '../Provider.jsx/ChartCounter'
import { NavLink, Outlet, useNavigate } from "react-router-dom";


export  function MyNavbar() {
  
    // let navigate = useNavigate();

    // let goToHome = () => {
    //   navigate("/home");
    // };

    // let goToAbout = () => {
    //   navigate("/about");
    // };

    // let goToContact = () => {
    //   navigate("/contact");
    // };

   let {count}= useContext(ChartCounter)

  return (
    <Navbar expand="lg" className=' sticky-top bg-white'>
      <Container>
        <Navbar.Brand href="#home">Cloth Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home">Home</Nav.Link>  
            <Nav.Link href="about"  >About us</Nav.Link>
            <Nav.Link href="contactus" >Contact US</Nav.Link>
            <Nav.Link href="#home"> <i class="bi bi-bag-check"></i> {count}</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

