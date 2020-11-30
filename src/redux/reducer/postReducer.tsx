import {initialValues } from './initialValues';
import {CREATE_POST, GET_ALL_POST} from '../actions/actions';


export const postReducer = (state = initialValues, action: { type: any; payload: any; }) => {
   switch(action.type) {
      case GET_ALL_POST:
         return {
            ...state,
            allPost: action.payload
         }
      case CREATE_POST:
         return {
            ...state,
            post: action.payload
         }
      default:
         return state;
   }
}