import React from 'react';

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
      <>
         <div className="upper-content">
            <p>{username}</p>
            <span>time here</span>
            <span>delete icon</span>
         </div>
         <p>{comment}</p>
      </>
   )
}

export default SingleComment;