import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export function Footer() {
    let date;
    let year;

    date = new Date();
    year = date.getFullYear();


  return (
    
        <Navbar sticky="bottom" bg="secondary" variant="dark" className='w-100 mt-auto'>
            <Container>
                <div className='d-flex align-middle text-light justify-content-center' style={{flex: "1"}}>
                    <span>&copy;{year} &nbsp;</span> 
                    <span>Justin Bench &nbsp;</span>
                    <span>BYU-Idaho</span>
                </div>
            </Container>
        </Navbar>
    
  )
}
