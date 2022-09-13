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
import { useState } from "react";

const defaultFormData = {
  title: "",
  body: "",
};

export default function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={(e)=>o}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
    </>
  );
}