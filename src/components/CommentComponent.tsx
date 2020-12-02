import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaComments } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SingleComment from './SingleComment';
import axios from 'axios';

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
interface Props {
   getPostData: () => void;
}

interface FormValue {
   comment: string;
}

const CommentComponent: React.FC<Props> = ({getPostData}) => {
   const [userPost, setUserPost] = useState<AllPostProps>();
   const [like, setLike] = useState<boolean>();
   const postId = useParams<ParamValue>();
   const {register, handleSubmit, reset} = useForm();
   const reducers = useSelector((state: ReducerProps) => ({
      ...state
   }));

   const {allPost} = reducers.postReducer;

   useEffect(() => {
      const findUserPost = allPost.find(post => post.id === Number(postId.id) );
      if(findUserPost) {
         const likeValue = findUserPost.like_post === 1 ? true : false;
         setLike(likeValue);
         setUserPost(findUserPost);
      }
   },[allPost]);

   const toggleLikes = async () => {
      setLike(!like);
      let response;
      if(!userPost) {
         return
      }
      if(!userPost.like_post) {
         const updatePost = {
            like_post: true,
            likes_count: userPost.likes_count + 1
         }

         response = await axios.patch(`${process.env.REACT_APP_API_SERVER_URL}/post/update_post/${4}/${userPost.id}`, updatePost);
      } else {
         const updatePost = {
            like_post: false,
            likes_count: userPost.likes_count === 0 ? 0 : userPost.likes_count - 1
         }
         response = await axios.patch(`${process.env.REACT_APP_API_SERVER_URL}/post/update_post/${4}/${userPost.id}`, updatePost);
      }
      getPostData();
      
   }

   const onSubmit = async (value: FormValue) => {
      console.log(value);
      await axios
         .post(`${process.env.REACT_APP_API_SERVER_URL}/comment/add_comment/${4}/${userPost?.id}`,value);
         reset();
         getPostData();
   }

   const toggleLikesClass = like ? "like-post": "";
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
                  <p className="likes" onClick={toggleLikes}>
                        <span className={toggleLikesClass}><AiFillHeart /></span>
                        <span>{userPost?.likes_count}</span>
                  </p>
                  <p className="comments">
                     <Link to="/comments">
                        <span ><FaComments /></span>
                        <span>{userPost?.comments?.length}</span>
                     </Link>
                  </p>
               </div>
            </div>
         </div>
         <div className="post-comment">
            <h3>post a comment</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="comment">
                  <input 
                     type="text" 
                     name="comment" 
                     id="comment" 
                     placeholder="Comment.." 
                     ref={register} />
               </label>
               <button type="submit">Submit</button>
            </form>
            <div className="display-comments">
               {userPost?.comments?.map((post) => (
                  <SingleComment key={post.id} post={post} username={userPost.username.username} />
               )) }
            </div>
         </div>
      </div>
   )
}

export default CommentComponent;