import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {CREATE_POST} from '../redux/actions/actions';
import axios from 'axios';

interface OnSubmitProps {
   post: string;
}

interface Props {
   getPostData: () => void;
}

const CreatePost: React.FC<Props> = ({getPostData}) => {
   const {handleSubmit, register, reset } = useForm();
   const dispatch = useDispatch();

   const onSubmit = async (value: OnSubmitProps) => {
      // dispatch({type: CREATE_POST, payload: value.post});
      await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/post/create/${4}`, value);
      reset();
      getPostData();

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