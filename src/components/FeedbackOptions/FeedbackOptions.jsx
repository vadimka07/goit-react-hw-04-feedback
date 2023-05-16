import React from 'react';
import PropTypes from "prop-types";
const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <>
            <li className="list-item" onClick={onLeaveFeedback}>
                <button>good</button>
            </li>
            <li className="list-item" onClick={onLeaveFeedback}>
                <button>bad</button>
            </li>
            <li className="list-item" onClick={onLeaveFeedback}>
                <button>neutral</button>
            </li>
        </>
    );
};

export { FeedbackOptions };

FeedbackOptions.propTypes = {
  onLeaveFeedback:PropTypes.func
}
