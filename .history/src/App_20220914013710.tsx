
//import HandleForm from "./component/HandleForm";
//import State from "./component/State";
import { useContext } from "react";
import { InputValueContext } from "./context/InputValueContext";

export default function App() {
  const { state, dispatch } = useContext(InputValueContext);

  return (
    <>
    /*
     <State/>
    // <HandleForm/>
    */
      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        SET VALUE TO 100
      </button>
    </>
  );
}