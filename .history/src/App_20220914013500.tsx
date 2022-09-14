import { useContext } from "react";
import HandleForm from "./component/HandleForm";
import State from "./component/State";
import { InputValueContext } from "./context/InputValueContext";

export default function App(){
  const [state,dispatch]=useContext(InputValueContext);
  return(
    // <State/>
    // <HandleForm/>
    <button onClick={()=}>
      SetValue to 100
    </button>
  );
}