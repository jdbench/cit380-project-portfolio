import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { ProjectNav } from '../../components';

export function Project2() {
  return (
    <div className='content d-flex'>
        <ProjectNav />
        <Container className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <h1 className='bg-warning px-2 py-3'>Project Survivor</h1>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Background</h2>
                    <Card.Text>
                        An idea proposed by Jaren Brownlee to a group consisting 
                        of Isaac Smith, Nathan Lambert, and I. There is a <Card.Link href="https://github.com/doehm/survivoR" target="_blank">large
                        dataset of facts</Card.Link> from the show <i>Survivor</i>.
                        It was our goal to turn this information into a convenient and random
                        fact generator.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Process</h2>
                    <Card.Text>
                        For this project, we started by using the waterfall approach,
                        then we moved to the v-model method, and then finally
                        we moved to an adaptation of the SAFe method we named the 
                        Storybook model. During our planning, we made gave each of 
                        our features a point value and a story. These stories all
                        got entered into our storybook, and then we chose what we
                        wanted to help with and told the group when we started work
                        and ended work.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Time Spent</h2>
                    <Card.Text>
                        ~ 28 hours
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-light'>
                <Card.Body>
                    <h2 className='px-2 py-2' style={{background: "lightblue"}}>Deliverables</h2>
                    <ul>
                        <li><Card.Link href="https://webmailbyui-my.sharepoint.com/:x:/g/personal/jdbench_byui_edu/EcqaIe-7_mJFpoke-ZhU3wIBR4YkH9zIK4AmRUHEqsi_Vw?e=LdTfZL" target="_blank">Project Charter</Card.Link></li>
                        <li><Card.Link href="https://webmailbyui-my.sharepoint.com/:x:/g/personal/jarenbro_byui_edu/EYcGiSIeOZVCnkD9CjKH5-oBUqBqgjp-QuYyzCRjc7JP3A?e=CNYcrF" target="_blank">Storybook</Card.Link></li>
                        <li><Card.Link href="https://webmailbyui-my.sharepoint.com/:w:/g/personal/jarenbro_byui_edu/ERd9njFS3iRKuyMsMiQ5vE4BkkLlU1uDfXM3cPaP0HKN9Q?e=WGg4uP" target="_blank">Feature Map</Card.Link></li>
                        <li><Card.Link href="https://webmailbyui-my.sharepoint.com/:p:/g/personal/chonerman_byui_edu/EdnZRD-PXQxPqt6tAGV4aK8B7U87nUopnYI1HuR-5wKBzw?e=Z36brH" target="_blank">Project Presentation</Card.Link></li>
                        <li><Card.Link href="https://jdbench.github.io/cit380/project2/" target="_blank">Get a Random Survivor Fact</Card.Link></li>
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
