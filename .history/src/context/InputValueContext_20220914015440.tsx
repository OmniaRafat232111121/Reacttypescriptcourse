import React, {createContext,useReducer} from "react"
const initialState={
    inputValue:0,
}
type Appstate=typeof initialState;
type Action=
|{type:'SET_INPUT_VALUE', payload:number}|
{type:'SET_INPUT_VALUE_100', payload:number};
interface inputProviderProps{
    children:React.ReactNode;
}
const reducer=(state:Appstate,action:Action)=>{

switch(action.type){
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
export const InputValueContext=createContext<{
    state:Appstate,
    dispatch:React.Dispatch<Action>;
}>({state:initialState,});
function InputValueProvider({children}:inputProviderProps){
   const [state,dispatch]=useReducer(reducer,initialState)
    return(
        <InputValueContext.Provider value={{state,dispatch}}>
        {children}
        </InputValueContext.Provider>
    )
}