import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { ProjectNav } from '../../components';

export function Project4() {
  return (
    <div className='content d-flex'>
        <ProjectNav />
        <Container className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <h1 className='bg-warning px-2 py-3'>Project Portfolio</h1>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Background</h2>
                    <Card.Text>
                        I went to Brother Godfrey and asked what format he would prefer to
                        have all of my course work sent to him. He didn't specifically 
                        identify a way, but he gave me an idea by mentioning a blog. I created
                        this website to present my work to Brother Godfrey.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Process</h2>
                    <Card.Text>
                        To go with one of the biggest things I've learned this semester, I decided
                        to create this website using React.js and Bootstrap. I did not have any
                        planning documents for this project, but I don't really think I needed any.
                        After coming up with a layout for the website, I consulted Brother Godfrey
                        and asked him if this layout would work specifically for him in terms of if
                        he felt he could navigate the site freely and easily. He said yes and gave me
                        some feedback regarding in text links and I decided to add that in the website
                        where appropriate. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Time Spent</h2>
                    <Card.Text>
                        ~ 16 hours
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Deliverables</h2>
                    <ul>
                        <li>
                            <Card.Link href="https://cit-380-project-portfolio.web.app/" target="_blank">Project Portfolio</Card.Link>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
