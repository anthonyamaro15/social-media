import React from 'react';
import {Route} from 'react-router-dom';
import CreatePost from './CreatePost';
import DisplayCards from './DisplayCards';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';


const MainApp = () => {
   return (
      <div>
         <Navbar />
         <Route path="/" exact>
            <CreatePost />
            <DisplayCards />
         </Route>
         <Route path="/register" exact>
            <Register />
         </Route>
         <Route path="/login" exact>
            <Login />
         </Route>
      </div>

   )
}

export default MainApp;