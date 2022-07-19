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
                ultimately make the company function
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
                I participated in the creation of <Card.Link>Becoming a Better Student</Card.Link>,
                and <Card.Link>Project Survivor</Card.Link> in a group consisting of Isaac 
                Smith, Nathan Lambert, Jaren Brownlee, and I. Later, I worked on the projects
                <Card.Link>PickShip</Card.Link> and this website portofolio on my own Overall, I put
                about 120 hours of work into the projects I worked on throughout this semester.
                All of the work starting with Project Surivor can be found on my
                <Card.Link href="https://webmailbyui-my.sharepoint.com/personal/jdbench_byui_edu/_layouts/15/Doc.aspx?sourcedoc={520d7ca5-d85d-4efc-a27c-658e5e508806}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&ejss=false" target="_blank">Course Backlog</Card.Link>.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
              What's Been Learned?
              </Card.Title>
              <ul>
                <li>It's easier to implement project management principles into group projects</li>
                <li>I enjoy working on projects where I can help either my own vision or the visions of others come to life</li>
                <li>How to create a React.js webapp</li>
                <li>How to work with Shopify CLI</li>
                <li>How to work with Firebase CLI</li>
              </ul>
              </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='px-2 py-3' style={{background: "lightblue"}}>
              How Did I Achieve My Goals?
              </Card.Title>
              <ul>
                <li>I constantly sought for ways to automate testing, tracking of code deployments, and implementation of code changes.</li>
                <li>I've found that in group work this semester, I grew increasing comfortable backing off of work someone else said they were going to do and letting them do it their own way. This was evident in this class, at work, and in my other classes.</li>
                <li>I've started to seek honest feedback from those that I work with on any project on what they thought of the work I did and how I can be better next time. As a service writer at work, as a student in the classroom and in the professor's office, and at home as a husband</li>
                <li>I've found that project success isn't determined by a good grade, a pat on the back, or acknowledgement from others. Project success is found when you and those that you work with have found that they have added quality to themselves. My personal project success can be tracked by reading through the journals I have provided on this webapp</li>
                <li>I completed other goals I set for myself because I knew my personal growth would outweigh the work it took to complete the goal.</li> 
              </ul>
            </Card.Body>
            
          </Card>
        </Card.Body>
      </Card>
    </Container>
  )
}
