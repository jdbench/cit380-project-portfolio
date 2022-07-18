import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';

export function JournalNav() {
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
        <Nav className='row'>
            <NavItem>
                <NavLink activeClassName='active' as={Link} to="/j6">
                    Week 6
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName='active' as={Link} to="/j7">
                    Week 7
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName='active' as={Link} to="/j8">
                    Week 8
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName='active' as={Link} to="/j9">
                    Week 9
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName='active' as={Link} to="/j10">
                    Week 10
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName='active' as={Link} to="/j11">
                    Week 11
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName='active' as={Link} to="/j12">
                    Week 12
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName='active' as={Link} to="/j13">
                    Week 13
                </NavLink>
            </NavItem>
        </Nav>
    </Navbar>
  )
}
