import {useState} from "react";
import { User } from "./interfaces";

export default function App(){
const [user,setUser]=useState<User|null>(null);
  const fetchUser=()=>{
    setUser({
      name:""
    })
  }
return(
    <>
    
    </>

  );
}