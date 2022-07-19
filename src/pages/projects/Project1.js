import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { ProjectNav } from '../../components';

export function Project1() {
  return (
    <div className='content d-flex'>
        <ProjectNav />
        <Container className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <h1 className='bg-warning px-2 py-3'>Becoming a Better Student</h1>
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
                        <Card.Link href="https://jdbench.github.io/cit380/project1/">Becoming a Better Student</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
