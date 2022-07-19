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
                    <Card.Text>
                        This project was the first I was involved with in the semester.
                        Becoming a Better Student was an idea that my group had where
                        the purpose was to create a framework for those starting
                        college to lean on in creating goals and plans for their
                        upcoming semester of college.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Process</h2>
                    <Card.Text>
                        For this project, our group consisting of Jaren Brownlee, Nathan Lambert,
                        and Isaac Smith, chose to use the scrum methodology to manage this project.
                        Isaac was the Product Owner, Jaren was the Scrum Master, and Nathan and I
                        were the team members. We had a sprint each week of our four week iteration.
                        Each sprint consisted of a sprint planning meeting, sprint review meeting,
                        and sprint retrospective meetings. 
                    </Card.Text>
                    <Card.Text>
                        With this being the first scrum experience for most all of us,
                        we may not have done things exactly the way that they were 
                        meant to be done. However, I know that we all learned from
                        the experience and helped each other grow in the process. I
                        grew an appreciation for scrum and being there for my teammates
                        whenever they needed the help.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Deliverables</h2>
                        <ul>
                        <li><Card.Link href="https://webmailbyui-my.sharepoint.com/:w:/g/personal/jarenbro_byui_edu/ET82B5ybidxCkGXMBnvvfngBLhcPcHYzxiGtHvlbLGp2vQ?e=OLLXS4" target="_blank">Scrum Planning Minutes 1</Card.Link></li>
                        <li><Card.Link href="https://webmailbyui-my.sharepoint.com/:x:/g/personal/jarenbro_byui_edu/EYX76z3KUXxOnt_p9fdo9nMBUZprFpYUPF8iL3ZedCsg6A?e=h2oZjY" target="_blank">Burndown Chart</Card.Link></li>
                        <li><Card.Link href="https://jdbench.github.io/cit380/project1/" target="_blank">Becoming a Better Student</Card.Link></li>
                        </ul>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
