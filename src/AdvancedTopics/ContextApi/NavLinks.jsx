import React from "react";
import UserContainer from "./UserContainer";
export default function NavLinks() {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
}
