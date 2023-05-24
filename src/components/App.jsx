import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Ul } from './Statistics/Statistics.styled';
import PropTypes, { array } from 'prop-types'

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleCLick = event => {
        switch (event.target.innerHTML) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return ((good * 100) / countTotalFeedback()).toFixed(0) + '%';
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
            }}
        >
            <Section title="Please Leave feedback" />
            <Ul>
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleCLick} />
            </Ul>
            <Section title="Statistics" />
            {countTotalFeedback() ? (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback}
                    positivePercentage={countPositiveFeedbackPercentage}
                />
            ) : (
                <Notification message="There is no feedback" />
            )}
        </div>
    );
};

App.propTypes = {
    title: PropTypes.string,
    onLeaveFeedback: PropTypes.func,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
    message: PropTypes.string,
    options: array,
};
