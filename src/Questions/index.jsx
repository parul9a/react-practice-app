import React, { useState } from "react";
import { questionsData } from "./data.js";
import SingleQuestion from "./SingleQuestion";

export default function index() {
  const [questions, setQuestions] = useState(questionsData);

  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
}
