import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    onLeaveFeedback = (feedbackType) => {
        this.setState(prevState => ({ [feedbackType]: prevState[feedbackType] + 1 }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
        
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total > 0 ? Math.round((good / total) * 100) : 0;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div
                style={{
                // height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    fontSize: 40,
                    color: '#010101'
                    }}
            >
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}  // folosește `onLeaveFeedback`
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
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    } 
}

// Acest cod definește o componentă React de tip Class Component, care este o aplicație simplă de feedback. Aplicația permite utilizatorilor să ofere feedback în trei categorii: good, neutral, și bad, și apoi afișează statistici bazate pe feedback-ul oferit. Iată o descriere detaliată a fiecărei părți:

// Structura și funcționalitățile componentei App:
// State-ul local:

// Componentele de tip clasă au propriul state, iar în această componentă App, state-ul conține trei variabile: good, neutral, și bad, care sunt inițializate la 0. Acestea reprezintă numărul de feedback-uri primite pentru fiecare categorie.
// Metode:

// onLeaveFeedback: Această funcție actualizează state-ul atunci când utilizatorul selectează un tip de feedback (bun, neutru sau rău). Este un handler dinamic care folosește numele tipului de feedback (transmis ca parametru) pentru a actualiza corespunzător valoarea din state.

// countTotalFeedback: Calculează suma totală a feedback-urilor din toate cele trei categorii.

// countPositiveFeedbackPercentage: Calculează procentajul de feedback-uri pozitive (good) din totalul de feedback-uri.

// Renderizarea UI:

// În metoda render, se extrag valorile good, neutral, și bad din state, împreună cu valorile calculate pentru numărul total de feedback-uri (totalFeedback) și procentajul de feedback-uri pozitive (positivePercentage).

// Componenta utilizează următoarele componente personalizate:

// Section: Un container pentru secțiuni diferite ale aplicației, cum ar fi secțiunea de feedback și secțiunea de statistici.
// FeedbackOptions: Un set de butoane care corespund opțiunilor de feedback. Aceasta primește ca prop lista de opțiuni (good, neutral, bad) și handlerul pentru acțiunea de click (onLeaveFeedback).
// Statistics: Afișează numărul de feedback-uri primite pentru fiecare categorie și statisticile generale.
// Notification: Afișează un mesaj de notificare în cazul în care nu există niciun feedback (când totalFeedback este 0).
// Logica condițională:

// În secțiunea de statistici, aplicația verifică dacă există feedback (totalFeedback > 0). Dacă da, se afișează statistici; în caz contrar, se afișează componenta Notification cu mesajul "There is no feedback".







            
