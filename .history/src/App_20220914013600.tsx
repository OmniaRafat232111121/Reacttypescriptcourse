import { useContext } from "react";
import HandleForm from "./component/HandleForm";
import State from "./component/State";
import { InputValueContext } from "./context/InputValueContext";

export default function App(){
  const [state,dispatch]=useContext(InputValueContext);
  return(
    // <State/>
    // <HandleForm/>
    <p>Value: {state.inputValue}</p>
    <button onClick={()=>dispatch({type: "SET_INPUT_VALUE_TO_100"})}>
      SetValue to 100
    </button>
  );
}