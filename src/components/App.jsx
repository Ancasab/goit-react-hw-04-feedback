import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const onLeaveFeedback = (feedbackType) => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const countTotalFeedback = () => {
        const { good, neutral, bad } = feedback;
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const { good } = feedback;
        const total = countTotalFeedback();
        return total > 0 ? Math.round((good / total) * 100) : 0;
    };

    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: 40,
                color: '#010101'
            }}
        >
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(feedback)}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>

            <Section title="Statistics">
                {totalFeedback > 0 ? (
                    <Statistics
                        good={feedback.good}
                        neutral={feedback.neutral}
                        bad={feedback.bad}
                        total={totalFeedback}
                        positivePercentage={positivePercentage}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </div>
    );
};



// import React, { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';

// export class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };
    
//     onLeaveFeedback = (feedbackType) => {
//         this.setState(prevState => ({ [feedbackType]: prevState[feedbackType] + 1 }));
//     };

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     };
        
//     countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         const total = this.countTotalFeedback();
//         return total > 0 ? Math.round((good / total) * 100) : 0;
//     };

//     render() {
//         const { good, neutral, bad } = this.state;
//         const totalFeedback = this.countTotalFeedback();
//         const positivePercentage = this.countPositiveFeedbackPercentage();

//         return (
//             <div
//                 style={{
//                 // height: '100vh',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     // alignItems: 'center',
//                     fontSize: 40,
//                     color: '#010101'
//                     }}
//             >
//                 <Section title="Please leave feedback">
//                     <FeedbackOptions
//                         options={Object.keys(this.state)}
//                         onLeaveFeedback={this.onLeaveFeedback}  // folosește `onLeaveFeedback`
//                     />
//                 </Section>

//                 <Section title="Statistics">
//                     {totalFeedback > 0 ? (
//                         <Statistics
//                             good={good}
//                             neutral={neutral}
//                             bad={bad}
//                             total={totalFeedback}
//                             positivePercentage={positivePercentage}
//                         />
//                     ) : (
//                         <Notification message="There is no feedback" />
//                     )}
//                 </Section>
//             </div>
//         );
//     } 
// }









            
