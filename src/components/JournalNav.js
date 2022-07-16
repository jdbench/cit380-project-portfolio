import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';

export function JournalNav() {
    const [active, setActive] = useState('default');
  return (
    <Navbar className='col-md-2 col-lg-2 d-md-block sidebar collapse'>
        <style type="text/css">{`
            .sidebar{
                background-color: silver;
            }
            `}
        </style>
        <Nav className='row' activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
            <NavItem>
                <NavLink as={Link} to="/j6">
                    Week 6
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/j7">
                    Week 7
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/j8">
                    Week 8
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/j9">
                    Week 9
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/j10">
                    Week 10
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/j11">
                    Week 11
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/j12">
                    Week 12
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={Link} to="/j13">
                    Week 13
                </NavLink>
            </NavItem>
        </Nav>
    </Navbar>
  )
}
