// import React from 'react'
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    console.log('Options received:', options);
    return (
        <ul className={css.listaButoane}>
            {options.map(option => (
                <li key={option}>
                    <button className={css.btnFeedback} name={option} type="button" onClick={() => onLeaveFeedback(option)}> {option}</button>
                </li>
            ))}
            
        </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// export default FeedbackOptions