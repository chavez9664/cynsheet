import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav  from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";

const Header = () => {

    

    return (
        <Navbar bg="dark" variant ="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color" : 'gold'}}>
                    <FontAwesomeIcon icon = {faPenNib}/>Cynsheet
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    </Nav>
                    <NavLink to="/create">Create a New Character</NavLink>
                    <NavLink to="/">View Character Roster</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header