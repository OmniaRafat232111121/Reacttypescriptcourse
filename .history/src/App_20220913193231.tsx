// import {useState} from "react";
// import { User } from "./interfaces";

// export default function App(){
// const [user,setUser]=useState<User|null>(null);
//   const fetchUser=()=>{
//     setUser({
//       name:"omnia",
//       age:23,
//       country:"The Good Doctor",
//       address: {
//         street: "Main st.",
//         number: 88,
//         zip: "21345",
//       },
//       admin:false,
//     })
//   }
// return(
//     <>
//     <button onClick={fetchUser}>Fetch on User Click</button>
//     {user&&<p>{`welcome to our ${user.name}`}</p>}
//     </>

//   );
// }
import {useState} from "react"
export default function App(){
  const defaultFormData=()=>{
    title="",
    body=""
  }
  const onChange=(e)=>{
    setFormData((prevState)=>{
      ...prevState,
      [e.target.id]: e.target.value,
    })

  }

  const [state,setState]=useState(defaultFormData);
  const {title,body}=formData;
return(
  <>
  <h1>Form</h1>
  <form on >
  <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title}  onChange={onChange}/>
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body"  value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
</>
  
);

}