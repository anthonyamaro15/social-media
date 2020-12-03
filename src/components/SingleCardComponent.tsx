import React from 'react';
import { FaComments } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useState } from 'react';
import {Link } from 'react-router-dom';


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

interface Props {
   data: DataValues
   updateLikes: () => void;
}

const SingleCardComponent: React.FC<Props> = ({data, updateLikes}) => {
   const {id, like_post, likes_count, post, username: {username}, comments} = data;


   const likePost = () => {
      console.log("here ")
   }

   return (
      <div className="SingleCardComponent">
         <p className="username">{username}</p>
         {/* <p>an hour</p>
         <p>{like_post}</p> */}
         <p className="date">12:30pm</p>
         <p>{post}</p>
         <div className="icons">
            <p className="likes" onClick={updateLikes}>
                  <span><AiFillHeart /></span>
                  <span>{likes_count}</span>
            </p>
            <p className="comments">
               <Link to={`/comments/${id}`}>
                  <span><FaComments /></span>
                  <span>{comments?.length}</span>
               </Link>
            </p>
         </div>
      </div>
   )
};

export default SingleCardComponent;