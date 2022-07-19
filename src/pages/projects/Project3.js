import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <Card.Text>
                        My brother, Kaden Bench, came to me with a product request.
                        He wanted a program that he can create locations, location tags,
                        manage locations, create a floor replenishment picklist, and
                        create an internet order picklist. This app was to be integrated into
                        Shopify to be used in by his small business, Tilden Co.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Process</h2>
                    <Card.Text>
                        At first, I was unaware of where to start or what to do. I <Card.Link href="https://webmailbyui-my.sharepoint.com/:w:/g/personal/jdbench_byui_edu/EV6LmsA-QQtAhAlH6yvzktsBXwLl5Fti47QP_SUd5ZxUSA?e=Gwif1P" target="_blank">created a plan</Card.Link> with
                        my brother of features that he would like to have. Because this project would work best information
                        React.js, I made plans to watch videos and follow along. Then I created a Trello board for tracking
                        my progress through the project as detailed in <Card.Link href="../journals/W09.js" target="_blank">my week nine journal</Card.Link>.
                        I decided to use the Get Stuff Done methodology for this project with some artifacts from
                        scrum mixed in there. At first my work was broken down into a backlog and a sprint.
                        Each week I would conduct a retrospective on the previous week and make plans for the
                        next. Later, I learned that with the other things that I had going on, I had to be
                        smarter with my management. I am now planning to do two iterations of work. The first is 
                        setting up Firebase and Shopify authentication for the project, the second is to build
                        the features requested by my brother. The first iteration ends on 19 July 2022 and the
                        second iteration ends on 15 August 2022. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Time Spent</h2>
                    <Card.Text>
                        ~ 64 hours
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Deliverables</h2>
                    <ul>
                        <li><Card.Link href="https://trello.com/b/w6XvoB2k/pickship-shopify-app" target="_blank">Trello Board</Card.Link></li>
                        <li><Card.Link href="https://webmailbyui-my.sharepoint.com/:x:/g/personal/jdbench_byui_edu/EaV8DVJd2PxOonxljl5QiAYBLcE7rPCScScrJX3mgROfqg?e=w0Fyss" target="_blank">Course Backlog</Card.Link></li>
                        <li><Card.Link href="https://pickship-react-dev.web.app" target="_blank">PickShip-React</Card.Link></li>
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
