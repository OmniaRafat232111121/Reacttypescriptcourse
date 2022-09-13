
import { useState } from "react";

const defaultFormData = {
  title: "",
  body: "",
  name:" "
};

export default function HandleForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body,name } = formData;
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body"  value={body} onChange={onChange} />
        <br />
        <br />
    
        <label htmlFor="body">Bod</label>
        <br />
        <input type="text" value={name} onChange={onChange} />
        <button type="submit">Upload post</button>
      </form>
    </>
  );
}