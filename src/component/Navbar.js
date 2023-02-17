import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faCirclePlus,faCircleInfo,faList,faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
export default function () {
  return (
    <div>
<Navbar bg="light" expand="lg">
            <Container>
               <Navbar.Brand href="#home">Resto</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home"> <Link to='/'><FontAwesomeIcon icon={faHouse} /> Home</Link></Nav.Link>
                     <Nav.Link href="#link"><Link to='/create'><FontAwesomeIcon icon={faCirclePlus} /> Create</Link></Nav.Link>
                        
                     <Nav.Link href="#home"><Link to='/list'><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
                     <Nav.Link href="#link"><Link to='/search'><FontAwesomeIcon icon= {faMagnifyingGlass} /> Search</Link> </Nav.Link>
                     {
                        !localStorage.getItem("login") ?
                        <Nav.Link href="#link"><Link to='/login'><FontAwesomeIcon icon= {faUser} /> Login</Link> </Nav.Link> :
                        <Nav.Link href="#link"><Link to='/logout'><FontAwesomeIcon icon= {faUser} /> Logout</Link> </Nav.Link>
                     }
                     
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

    </div>
  )
}
