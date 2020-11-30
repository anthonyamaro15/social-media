import React from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


interface FormProps {
   value: string;
}

const Login = () => {
   const {register, handleSubmit} = useForm();
   const history = useHistory();

   const onSubmit = async (value: FormProps) => {
      const {data} = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/api/login`, value);
      // data.token
      history.push("/");
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

export default Login;
