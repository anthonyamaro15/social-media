import React from 'react';

interface CommentValues {
   id: number;
   comment: string;
}

interface DataValues {
   id: number;
   like_post: number;
   likes_count: number;
   post: string;
   comments?: CommentValues[];
}

interface Props {
   data: DataValues
}

const SingleCardComponent: React.FC<Props> = ({data}) => {
   const {like_post, likes_count, post, comments} = data;

   return (
      <div className="SingleCardComponent">
         <p>name</p>
         <p>an hour</p>
         <p>image here</p>
         <p>{post}</p>
         <span>{likes_count}</span>
         <span>{comments?.length}</span>
      </div>
   )
};

export default SingleCardComponent;