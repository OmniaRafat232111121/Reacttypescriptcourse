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
        case 'SET_INPUT_VALUE_100':
            return{
                ...state,
                inputValue:payload
            };
            default:
                return state;

}
}
export const InputValueContext=createContext(initialState);
function InputValueProvider(props){
   const [state,dispatch]=u
    return(
        <InputValueContext.Provider>
        {props.children}
        </InputValueContext.Provider>
    )
}