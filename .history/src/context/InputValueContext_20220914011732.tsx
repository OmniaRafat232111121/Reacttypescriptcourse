import {createContext} from "react"
const initialState={
    inputValue:0,

}
const reducer=(state,action)
export const InputValueContext=createContext(initialState);