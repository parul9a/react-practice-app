import React, { useState } from "react";
import "./index.css";
export default function index() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form className="multipleInputForm" onSubmit={handleSubmit}>
      <h3>Multiple Inputs</h3>
      <div className="form-row">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Password</label>
        <input
          type="password"
          value={user.password}
          onChange={handleChange}
          name="password"
        />
      </div>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
