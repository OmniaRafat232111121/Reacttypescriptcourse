import {createContext,useReducer} from "react"
const initialState={
    inputValue:0,
}
type Appstate=typeof initialState;
type Action=
|{type:'SET_INPUT_VALUE', payload:number}|
{type:'SET_INPUT_VALUE_100', payload:number};
interface input
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
                inputValue:100
            };
            default:
                return state;

}
}
export const InputValueContext=createContext(initialState);
function InputValueProvider(props){
   const [state,dispatch]=useReducer(reducer,initialState)
    return(
        <InputValueContext.Provider value={{state,dispatch}}>
        {props.children}
        </InputValueContext.Provider>
    )
}