import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { VscBellDot } from "react-icons/vsc";

function Header () {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="/symbols.svg"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="fickle flightlogo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end " >
          
            <Nav.Link href="#" className="m-2" >Explore</Nav.Link>
            <Nav.Link href="#" className="m-2"  >Search</Nav.Link>
            <Nav.Link href="#" className="m-2" >Hotels</Nav.Link>
            <Nav.Link href="#" className="m-2" >Others</Nav.Link> 
        </Navbar.Collapse>
        <div className="m-2" ><VscBellDot /></div>
        <img src="./girl.png" className="roundedCircle" width="40" height="40"/>
      </Container>
    </Navbar>
  );
}

export default Header;