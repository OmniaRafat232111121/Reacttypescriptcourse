import HandleForm from "./component/HandleForm";
import State from "./component/State";

export default function App(){
  const [state,dispatch]=useContext(Inp)
  return(
    // <State/>
    <HandleForm/>
  )
}