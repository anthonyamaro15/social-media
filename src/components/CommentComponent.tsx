import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaComments } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SingleComment from './SingleComment';

interface CommentValues {
   id: number;
   comment: string;
}

interface UsernameValue {
   username: string;
}

interface AllPostProps {
   id: number;
   like_post: number;
   likes_count: number;
   post: string;
   username: UsernameValue;
   comments?: CommentValues[];

}

interface InnerReducer {
   post: string;
   allPost: AllPostProps[];
}

interface ReducerProps {
   postReducer: InnerReducer;
}
interface ParamValue {
   id: string;
}
const CommentComponent = () => {
   const [userPost, setUserPost] = useState<AllPostProps>();
   const userId = useParams<ParamValue>();
   const {register, handleSubmit} = useForm();
   const reducers = useSelector((state: ReducerProps) => ({
      ...state
   }));

   const {allPost} = reducers.postReducer;

   useEffect(() => {
      const findUserPost = allPost.find(post => post.id === Number(userId.id) );
      console.log("whta is this valu?? ", findUserPost);
      if(findUserPost) {
         setUserPost(findUserPost);
      }
   },[]);
   return (
      <div>
         <div className="CommentComponent">
            <div className="SingleCardComponent">
               <p className="username">{userPost?.username?.username}</p>
               {/* <p>an hour</p>
               <p>{like_post}</p> */}
               <p className="date">12:30pm</p>
               <p>{userPost?.post}</p>
               <div className="icons">
                  <p className="likes">
                        <span><AiFillHeart /></span>
                        <span>{userPost?.likes_count}</span>
                  </p>
                  <p className="comments">
                     <Link to="/comments">
                        <span><FaComments /></span>
                        <span>{userPost?.comments?.length}</span>
                     </Link>
                  </p>
               </div>
            </div>
         </div>
         <div className="post-comment">
            <h3>post a comment</h3>
            <form>
               <label htmlFor="comment">
                  <input 
                     type="text" 
                     name="comment" 
                     id="comment" 
                     placeholder="Comment.." 
                     ref={register} />
               </label>
            </form>
         </div>
         <div className="display-comments">
            {userPost?.comments?.map((post) => (
               <SingleComment key={post.id} post={post} username={userPost.username.username} />
            )) }

         </div>
      </div>
   )
}

export default CommentComponent;