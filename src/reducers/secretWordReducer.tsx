import { PayloadAction } from "@reduxjs/toolkit";
import { actionTypes } from "../actions";

const secretWordReducer = (state:string = "", action: PayloadAction) => {
 switch(action.type){
   case actionTypes.SET_SECRET_WORD:
     return action.payload
     default:
       return state
 }
};
export default secretWordReducer;
