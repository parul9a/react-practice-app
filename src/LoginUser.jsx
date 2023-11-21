import React, { useState } from "react";

export default function LoginUser() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Parul" });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h3>User Name: {user.name}</h3>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>Please Login</h3>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}
