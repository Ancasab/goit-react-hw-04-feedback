// import React from 'react'
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({good, neutral, bad, total, positivePercentage,}) => {
    const statisticArray = [
        { statItem: good, title: 'Good' },
        { statItem: neutral, title: 'Neutral' },
        { statItem: bad, title: 'Bad' },
        { statItem: total, title: 'Total feedbacks' },
        { statItem: positivePercentage, title: 'Positive feedbacks' },
        ]
  
    return (
        <ul className={css.listaStats}>
            {statisticArray.map(({ statItem, title }) => (
                <li className={css.itemStats} key={title}>
                    <p>
                        {title}: {' '}
                        <span>
                            {title !== 'Positive feedbacks' ? statItem : positivePercentage + "%"}
                        </span>
                    </p>
                </li>
            ))}
        </ul>
    
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

// export default Statistics
