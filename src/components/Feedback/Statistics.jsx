import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  // buttonValue,
  // options,
}) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem key={shortid.generate()}>good: {good}</StatisticsItem>
        <StatisticsItem key={shortid.generate()}>
          neutral: {neutral}
        </StatisticsItem>
        <StatisticsItem key={shortid.generate()}>bad: {bad}</StatisticsItem>
        {/* {options.map(option => {
          return (
            <StatisticsItem key={shortid.generate()}>
              {option} : {buttonValue(option)}
            </StatisticsItem>
          );
        })} */}
      </StatisticsList>

      <StatisticsText>Total: {total}</StatisticsText>
      <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
