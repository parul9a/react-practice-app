import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

export default function FetchUseEffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Github Users</h3>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <p>{login}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
