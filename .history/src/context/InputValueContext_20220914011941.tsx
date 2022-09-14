import {createContext,useReducer} from "react"
const initialState={
    inputValue:0,

}
const reducer=(state,action)=>{
const {type,payload}=action;
switch(type){
    case 'SET_INPUTVALUE'
}
}
export const InputValueContext=createContext(initialState);