import React from 'react';
import { MdDelete } from "react-icons/md";

interface CommentValues {
   id: number;
   comment: string;
}

interface Props {
   post: CommentValues;
   username: string;
}

const SingleComment: React.FC<Props> = ({post, username}) => {
   const {comment} = post;
   return (
      <div className="SingleComment-wrapper">
         <div className="upper-content">
            <div>
               <p className="username">{username}</p>
               <span>time here</span>
            </div>
            <span><MdDelete /></span>
         </div>
         <p>{comment}</p>
      </div>
   )
}

export default SingleComment;