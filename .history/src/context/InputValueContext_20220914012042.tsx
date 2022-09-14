import {createContext,useReducer} from "react"
const initialState={
    inputValue:0,

}
const reducer=(state,action)=>{
const {type,payload}=action;
switch(type){
    case 'SET_INPUT_VALUE':
        return{
            ...state,
            inputValue:payload
        };
        case 'SET_INPUT_VALUE_':
}
}
export const InputValueContext=createContext(initialState);