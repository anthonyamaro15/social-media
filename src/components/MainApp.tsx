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
import CommentComponent from './CommentComponent';


interface CommentValues {
   id: number;
   comment: string;
}

interface UsernameValue {
   username: string;
}

interface DataValues {
   id: number;
   like_post: number;
   likes_count: number;
   post: string;
   username: UsernameValue;
   comments?: CommentValues[];
}


const MainApp = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      getPostData();
   },[]);

   async function getPostData() {
      const {data} = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/post/get_post`);
      dispatch({type: GET_ALL_POST, payload: data});
      console.log('here ', data);
   }

   const updateLikes = async (post: DataValues) => {
      const likes_count = post.likes_count + 1;
      try {
         const { data } = await axios
            .patch(`${process.env.REACT_APP_API_SERVER_URL}/post/update_likes/${post.id}`,{likes_count});
         getPostData();
      } catch (error) {
         console.log(error.message);
      }
   }
   
   return (
      <div>
         <Navbar />
         <Route path="/" exact>
            <CreatePost getPostData={getPostData} />
            <DisplayCards updateLikes={updateLikes} />
         </Route>
         <Route path="/register" exact>
            <Register />
         </Route>
         <Route path="/login" exact>
            <Login />
         </Route>
         <Route path="/comments/:id" exact>
            <CommentComponent getPostData={getPostData} updateLikes={updateLikes} />
         </Route>
      </div>

   )
}

export default MainApp;