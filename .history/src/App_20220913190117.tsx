import {useState} from "react";
import { User } from "./interfaces";

export default function App(){
const [user,setUser]=useState<User|null>(null);
  const fetchUser=()=>{
    setUser({
      name:"omnia",
      age:23,
      country:"The Good Doctor",
      address: {
        street: "Main st.",
        number: 88,
        zip: "21345",
      },
      
    })
  }
return(
    <>
    
    </>

  );
}