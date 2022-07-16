import React from 'react';
import { Container } from 'react-bootstrap';
import { ProjectNav } from '../../components';

export function Project3() {
  return (
    <div className='content d-flex'>
        <ProjectNav />
        <Container className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <h1 className='bg-warning px-2 py-3'>PickShip</h1>
            <div className='bg-light'>
                <h2 className='px-2 py-2' style={{background: "lightblue"}}>Background</h2>
            </div>
            <div className='bg-light'>
                <h2 className='px-2 py-2' style={{background: "lightblue"}}>Process</h2>
            </div>
            <div className='bg-light'>
                <h2 className='px-2 py-2' style={{background: "lightblue"}}>Deliverables</h2>
            </div>
        </Container>
    </div>
  )
}
