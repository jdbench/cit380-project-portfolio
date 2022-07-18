import React from 'react';
import { Container, Card } from 'react-bootstrap';

export function Home() {
  return (
    <Container>
      <Card>
        <h1 className='bg-warning py-3 px-2'>Home</h1>
        <Card>
          <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
            About Me
          </Card.Title>
          <Card.Body>
            My name is Justin Bench. I am 
            student at Brigham Young University -
            Idaho and am enrolled in CIT 380, 
            otherwise known as Project Management.
            As of this writing, I live in Rexburg, 
            Idaho with my wife, McKayla. As a 
            Computer Information Technology nerd,
            I hope to find a career where I can 
            help an organization that's main 
            purpose is to help other people and 
            the community they exist in. It is 
            my hope that within this organization,
            I will help the organization by creating,
            planning, building, and deploying
            tools for the company to use that will
            ulimately make the company function
            more efficiently.
          </Card.Body>
        </Card>
        <Card>
          <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
            Class Goals
          </Card.Title>
          <Card.Body>
            Throughout this course, I have had the 
            opportunity to recognize and 
            accept my own weaknesses in a project 
            group either through my own reflection
            or through feedback requested from my
            team.
          </Card.Body>
        </Card>
        <Card>
          <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
            Class Activities
          </Card.Title>
          <Card.Body>
            Throughout this course, I have had the 
            opportunity to recognize and 
            accept my own weaknesses in a project 
            group either through my own reflection
            or through feedback requested from my
            team.
          </Card.Body>
        </Card>
        <Card>
          <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
            What Was Learned
          </Card.Title>
          <Card.Body>
            Throughout this course, I have had the 
            opportunity to recognize and 
            accept my own weaknesses in a project 
            group either through my own reflection
            or through feedback requested from my
            team.
          </Card.Body>
        </Card>
        <Card>
          <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
            How Did I Achieve My Goals
          </Card.Title>
          <Card.Body>
            Throughout this course, I have had the 
            opportunity to recognize and 
            accept my own weaknesses in a project 
            group either through my own reflection
            or through feedback requested from my
            team.
          </Card.Body>
        </Card>
      </Card>
    </Container>
  )
}
