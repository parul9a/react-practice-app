import React, { useState } from "react";

export default function AddUser({ list }) {
  const [name, setName] = useState("");
  const [user, setUser] = useState(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name: name };
    setUser([...user, newUser]);
    console.log(user);
    setName("");
  };
  const removeItem = (id) => {
    const newUsers = user.filter((item) => item.id !== id);
    setUser(newUsers);
  };
  return (
    <div className="addUserSection">
      <form onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <ul className="usersList">
          {user.map((item) => {
            return (
              <li className="userItem" key={item.id}>
                <p>{item.name}</p>
                <button
                  className="btn removeBtn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}
