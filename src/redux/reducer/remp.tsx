import {initialValues } from './initialValues';


export const example = (state = initialValues, action: { type: any; payload: any; }) => {
   switch(action.type) {
      case 'CREATE_POST':
         return {
            ...state,
            post: action.payload
         }
      default:
         return state;
   }
}