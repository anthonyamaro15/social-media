import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';

interface OnSubmitProps {
   post: string;
}

const CreatePost = () => {
   const {handleSubmit, register } = useForm();
   const dispatch = useDispatch();

   const onSubmit = (value: OnSubmitProps) => {
      dispatch({type: "CREATE_POST", payload: value.post});
   };

   return (
      <div>
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