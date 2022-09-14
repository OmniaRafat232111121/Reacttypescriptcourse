import HandleForm from "./component/HandleForm";
import State from "./component/State";

export default function App(){
  const [state,dispatch]=useContext(In)
  return(
    // <State/>
    <HandleForm/>
  )
}