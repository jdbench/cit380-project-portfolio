import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Project1, Project2, Project3, Project4, J6, J7, J8, J9, J10, J11, J12, J13 } from '../pages';
import { Navbar, Footer } from './index';

export function App() {
  return (
    <Router>
      <div className='content d-flex flex-column min-vh-100'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/project1' element={<Project1 />}></Route>
          <Route exact path='/project2' element={<Project2 />}></Route>
          <Route exact path='/project3' element={<Project3 />}></Route>
          <Route exact path='/project4' element={<Project4 />}></Route>
          <Route exact path='/j6' element={<J6 />}></Route>
          <Route exact path='/j7' element={<J7 />}></Route>
          <Route exact path='/j8' element={<J8 />}></Route>
          <Route exact path='/j9' element={<J9 />}></Route>
          <Route exact path='/j10' element={<J10 />}></Route>
          <Route exact path='/j11' element={<J11 />}></Route>
          <Route exact path='/j12' element={<J12 />}></Route>
          <Route exact path='/j13' element={<J13 />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
