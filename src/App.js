import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import User from './components/User';
import Oldbooks from './components/Oldbooks';
import NewBooks from './components/NewBooks';



function App() {
  return (
    <div className='App'>
  <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>contact</Link></li>
        <li><Link to='/user/1'>user 1</Link></li>
        <li><Link to='/user/2'>user 2</Link></li>
        <li><Link to='/user/3'>user 3</Link></li>

        <li><Link to='/books/oldbooks'>old Books</Link></li>
        <li><Link to='/books/newbooks'>new Books</Link></li>
      </ul>
    
        <Routes>
           <Route path='/' element={<Home/>}/> 
           <Route path='/about' element={<About/>}/> 
           <Route path='/contact' element={<Contacts   />}/> 
           <Route path='/user/:id' element={<User/>}/> 
        
        <Route path='/books'>
              <Route path='oldBooks' element={<Oldbooks/>}/> 
              <Route path='newBooks' element={<NewBooks/>}/>   

        </Route>
        
        </Routes>
        

      </Router>
     


    </div>
  );
}

export default App;
