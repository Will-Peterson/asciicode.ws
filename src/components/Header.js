import React from 'react';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
// import Button from 'react-bootstrap/button';
// import Form from 'react-bootstrap/form';
// import FormControl from 'react-bootstrap/formcontrol';

const Header = () => {
    return (
        <div className="App">
        {/* DARK THEME */}
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">AsciiCode.ws</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#link1">Link 1</Nav.Link>
                <Nav.Link href="#link2">Link 2</Nav.Link>
                <Nav.Link href="#link3">Link 3</Nav.Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
      
            {/* LIGHT THEME */}
            {/* <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">AsciiCode.ws</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#link1">Link 1</Nav.Link>
                <Nav.Link href="#link2">Link 2</Nav.Link>
                <Nav.Link href="#link3">Link 3</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar> */}
        </div>
    );
}

export default Header;