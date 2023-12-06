import React from "react";
import useFetchUser from "./useFetchUser";
const url = "https://api.github.com/users/QuincyLarson";
export default function FetchPerson() {
  const { loading, isError, user } = useFetchUser(url);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There is an error</h2>;
  }
  const { name, avatar_url, company, bio } = user;
  return (
    <div className="fetch-user-section" style={{ margin: "40px auto" }}>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
}
