import { useState, useEffect } from "react";

const useFetchUser = (url) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsError(true);
          return;
        }
        const user = await res.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);
  return { loading, isError, user };
};
export default useFetchUser;
