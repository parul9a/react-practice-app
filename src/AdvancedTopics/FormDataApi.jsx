import React from "react";
import "./FormDataApi.css";
export default function FormDataApi() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
  };
  return (
    <form className="formData" onSubmit={handleSubmit}>
      <h3>Form Data</h3>
      <div className="form-row">
        <label className="form-label">Name</label>
        <input type="text" name="name" />
      </div>
      <div className="form-row">
        <label className="form-label">Email</label>
        <input type="email" name="email" />
      </div>
      <div className="form-row">
        <label className="form-label">Password</label>
        <input type="password" name="password" />
      </div>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
