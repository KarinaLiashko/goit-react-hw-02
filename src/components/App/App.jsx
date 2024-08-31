import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

import "./App.css";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem("feedbackValues");
    return savedValues
      ? JSON.parse(savedValues)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((values.good / totalFeedback) * 100) : 0;

  return (
    <>
      <div>
        <Description />
        <Options
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          onUpdate={updateFeedback}
          onReset={resetFeedback}
          totalFeedback={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            values={values}
            total={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
