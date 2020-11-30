import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Route} from 'react-router-dom';
import CreatePost from './CreatePost';
import DisplayCards from './DisplayCards';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import axios from 'axios';
import { GET_ALL_POST } from '../redux/actions/actions';


const MainApp = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      getPostData();
   },[]);

   async function getPostData() {
      const {data} = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/post/get_post`);
      dispatch({type: GET_ALL_POST, payload: data});
   }
   
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