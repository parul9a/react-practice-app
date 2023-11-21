import React, { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";
import Loading from "./Loading";
import Tours from "./Tours";
export default function index() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return <Tours tours={tours} removeTours={removeTours} />;
}
