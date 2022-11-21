import { useState } from 'react';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const Feedback = () => {
  const defaultValue = 0;

  const getFromLocalStorage = key => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  };
  const changeLocalStorage = (key, state) => {
    window.localStorage.setItem(key, JSON.stringify(state));
  };

  const [good, setGood] = useState(getFromLocalStorage('good'));
  const [neutral, setNeutral] = useState(getFromLocalStorage('neutral'));
  const [bad, setBad] = useState(getFromLocalStorage('bad'));

  const handleIncrement = type => {
    switch (type) {
      case 'good':
        setGood(good => good + 1);
        changeLocalStorage('good', good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        changeLocalStorage('neutral', neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        changeLocalStorage('bad', bad + 1);
        break;
      default:
        return;
    }
  };

  // Statistics - second variant
  // const buttonValue = type => {
  //   switch (type) {
  //     case 'good':
  //       return good;

  //     case 'neutral':
  //       return neutral;

  //     case 'bad':
  //       return bad;
  //     default:
  //       return;
  //   }
  // };

  const buttonsNames = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad;
  const positivePercentage = Number.parseInt(
    (good * 100) / (good + neutral + bad)
  );

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonsNames}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
            // buttonValue={buttonValue}
            // options={buttonsNames}
          />
        ) : (
          <Notification message="There is no feedback..." />
        )}
      </Section>
    </div>
  );
};
