import React, { SetStateAction } from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {CREATE_POST} from '../redux/actions/actions';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

interface OnSubmitProps {
   post: string;
}

interface Props {
   getPostData: () => void;
}

const CreatePost: React.FC<Props> = ({getPostData}) => {
   const [userId, setUserId] = useState<SetStateAction<string> | null>();
   const {handleSubmit, register, reset } = useForm();
   const dispatch = useDispatch();

   useEffect(() => {
      const getUserId = localStorage.getItem("user_id");
      if(getUserId) {
         setUserId(getUserId);
      }
   },[]);

   const onSubmit = async (value: OnSubmitProps) => {
      // dispatch({type: CREATE_POST, payload: value.post});
      if(userId) {
         await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/post/create/${userId}`, value);
         reset();
         getPostData();
      } else {
         alert("Please login first");
      }

   };

   return (
      <div className="CreatePost">
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="post">
               <input 
                  type="text" 
                  name="post" 
                  id="post" 
                  placeholder="create post" 
                  ref={register}
               />
            </label>
            <button type="submit">Submit</button>
         </form>
      </div>
   )
}

export default CreatePost;