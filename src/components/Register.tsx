import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

interface FormProps {
   value: string;
}

const Register = () => {
   const {register, handleSubmit} = useForm();
   const history = useHistory();

   const onSubmit = async (value: FormProps) => {
      const {data} = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/api/register`, value);
      console.log(data);
      history.push("/login");
   }

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">
               <input 
                  type="text" 
                  name="email" 
                  id="email" 
                  placeholder="email" 
                  ref={register}
               />
            </label>
            <label htmlFor="password">
               <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="password" 
                  ref={register} 
               />
            </label>
            <button type="submit">Submit</button>
         </form>
      </div>
   )
}

export default Register;
