import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export function ProjectNav() {

  return (
    <Navbar sticky='top' className='sticky-top col-md-2 col-lg-2 d-md-block sidebar collapse'>
        <style type="text/css">{`
            .sidebar{
                background-color: silver;
                height: 100vh;
                top: 52px;
                z-index: 2;
            }
            `}
        </style>
        <Nav
        className='row pt-3'>
            <Nav.Item>
                <Nav.Link activeClassName='active' as={NavLink} to="/project1">
                    Becoming a Better Student
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link activeClassName='active' as={NavLink} to="/project2">
                    Project Survivor
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link activeClassName='active' as={NavLink} to="/project3">
                    PickShip
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link activeClassName='active' as={NavLink} to="/project4">
                    Portfolio Page
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
  )
}
