import React, {useState} from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export function NavbarComponent() {
    const [active, setActive] = useState('default');
  return (
    <Navbar collapseOnSelect expand="md" sticky="top" bg="primary" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="/">
                CIT380
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="responsive-navbar-nav">
                <Nav className="justify-content-end" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)} style={{width: "100%"}}>
                    <NavDropdown title="Projects">
                        <NavDropdown.Item as={Link} to="/project1">
                            Becoming a Better Student
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/project2">
                            Survivor Project
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/project3">
                            PickShip
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/project4">
                            Project Portfolio
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Journals">
                        <NavDropdown.Item as={Link} to="/J6">
                            Week 6
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/J7">
                            Week 7
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/J8">
                            Week 8
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/J9">
                            Week 9
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/J10">
                            Week 10
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/J11">
                            Week 11
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/J12">
                            Week 12
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/J13">
                            Week 13
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
