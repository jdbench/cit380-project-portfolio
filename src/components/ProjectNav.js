import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavItem,NavLink,Nav, Navbar } from 'react-bootstrap';

export function ProjectNav() {

    const [active, setActive] = useState('default');
    
  return (
    <Navbar className='col-md-3 col-lg-2 d-md-block sidebar collapse' variant='light'>
        <style type="text/css">{`
            .sidebar{
                background-color: silver;
            }
            `}
        </style>
        <Nav className='row pt-3' activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)} >
            <NavItem>
                <NavLink as={Link} to="/project1">
                    Becoming a Better Student
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/project2">
                    Project Survivor
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/project3">
                    PickShip
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/project4">
                    Portfolio Page
                </NavLink>
            </NavItem>
        </Nav>
    </Navbar>
  )
}
