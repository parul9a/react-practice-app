import React, { useState, useEffect } from "react";
const url = "https://course-api.com/react-tabs-project";
import "./tabs.css";
import JobInfo from "./JobInfo";
import ButtonContainer from "./ButtonContainer";

export default function index() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/* Button Container */}
      <ButtonContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* JonsInfo */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}
