import React from 'react';
import { useSelector } from 'react-redux';
import SingleCardComponent from './SingleCardComponent';

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

const DisplayCards = () => {
   const reducers = useSelector((state: ReducerProps) => ({
      ...state
   }));
   const {allPost} = reducers.postReducer;

   return (
      <div className="DisplayCards">
         {allPost.map((post) => (
            <SingleCardComponent key={post.id} data={post} />
         ))}
        
      </div>
      
   )
}

export default DisplayCards;