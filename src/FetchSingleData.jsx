import React, { useState, useEffect } from "react";

export default function FetchSingleData() {
  const url = "https://api.github.com/users/QuincyLarson";
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);
  if (loading) {
    return <h2>Loading .....</h2>;
  }
  if (isError) {
    return <h2>Error .....</h2>;
  }
  return (
    <div>
      <h2>Fetch Data</h2>
    </div>
  );
}
