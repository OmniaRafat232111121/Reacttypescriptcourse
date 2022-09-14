import {createContext} from "react"
const initialState={
    inputValue:0,

}
const reducer=(state,action)=>{
    const {type,payload}=action
}
export const InputValueContext=createContext(initialState);