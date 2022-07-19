import React from 'react';
import { Container, Card } from 'react-bootstrap';

export function Home() {
  return (
    <Container>
      <Card  className="my-3" style={{background: "lightgray", boxShadow: "0px 1px 4px 1px gray", }}>
        <Card.Body>
          <h1 className='bg-warning py-3 px-2'>Home</h1>
          <Card>
            <Card.Body>
              <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
                About Me
              </Card.Title>
              <Card.Text>
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
                I will help by creating,
                planning, building, and deploying
                tools for the company to use that will
                ulimately make the company function
                more efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
                Class Goals
              </Card.Title>
              <div style={{background:"whitesmoke", boxShadow:"1px 2px 4px 1px gainsboro"}}>
                <h4 className='px-2 py-2' style={{background:"lightgreen"}}>Desired Course Outcomes</h4>
                <div className='px-2'>
                  <ul>
                    <li>Plan to do work and implement automated tracking of work. (Proactive Planner)</li>
                    <li>Gain the ability and the willpower to let others take on larger loads of work without me completely taking over, but still helping where help is needed. (Team Player)</li>
                    <li>Feel comfortable actively seeking feedback from group and class members regarding work that I do through presentations, reports, team communications, and deliverables. (Effective Communicator)</li>
                    <li>Find methods for determining project success other than getting a good grade. (Sound Thinker)</li>
                  </ul>
                  <Card.Text>
                  Other goals I've made during the semester can be found on the <Card.Link href="https://webmailbyui-my.sharepoint.com/personal/jdbench_byui_edu/_layouts/15/Doc.aspx?sourcedoc={520d7ca5-d85d-4efc-a27c-658e5e508806}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&ejss=false" target="_blank">Course Backlog</Card.Link> I developed.
                  Throughout the semester, I continued to make goals that would help me
                  to achieve the goals that I set at the beginning of the semester.
                  </Card.Text>
                </div>
                
                
              </div>
                
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
              Class Activities
              </Card.Title>
              <Card.Text>
                Throughout this course, I have had the 
                opportunity to recognize and 
                accept my own weaknesses in a project 
                group either through my own reflection
                or through feedback requested from my
                team.
              </Card.Text>
              <Card.Link href="https://webmailbyui-my.sharepoint.com/personal/jdbench_byui_edu/_layouts/15/Doc.aspx?sourcedoc={520d7ca5-d85d-4efc-a27c-658e5e508806}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&ejss=false" target="_blank">Course Backlog</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
              What's Been Learned?
              </Card.Title>
              <Card.Text>
                Throughout this course, I have had the 
                opportunity to recognize and 
                accept my own weaknesses in a project 
                group either through my own reflection
                or through feedback requested from my
                team.
              </Card.Text>
              </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
              How Did I Achieve My Goals?
              </Card.Title>
              <Card.Text>
                Throughout this course, I have had the 
                opportunity to recognize and 
                accept my own weaknesses in a project 
                group either through my own reflection
                or through feedback requested from my
                team.
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Card.Body>
      </Card>
    </Container>
  )
}
