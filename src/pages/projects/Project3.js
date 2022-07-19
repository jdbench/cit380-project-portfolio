import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { ProjectNav } from '../../components';

export function Project3() {
  return (
    <div className='content d-flex'>
        <ProjectNav />
        <Container className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <h1 className='bg-warning px-2 py-3'>PickShip</h1>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Background</h2>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Process</h2>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Deliverables</h2>
                    <ul>
                        <li><Card.Link href="https://trello.com/b/w6XvoB2k/pickship-shopify-app" target="_blank">Trello Board</Card.Link></li>
                        <li><Card.Link href="https://pickship-react-dev.web.app" target="_blank">PickShip-React</Card.Link></li>
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
