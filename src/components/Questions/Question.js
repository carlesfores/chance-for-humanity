import React, { useState } from 'react';
import { QuestionForm } from './QuestionForm';
import './Question.scss';

export const Question = ( {
    updateProgress,
    nextStep,
    step,
    id,
    question,
    response,
    input
} ) => {

    const [value, setValue] = useState('');
    const [status, setStatus] = useState(false);
    const [showResponse, setShowResponse] = useState(false);

    const validateResponse = () => {
        return value.toLocaleLowerCase() === response.toLocaleLowerCase();
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const result = validateResponse();
        updateProgress(result, question);
        setStatus(result)
        setShowResponse(true);
    }

    const handleChange = ( event ) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        nextStep();
        setValue('');
    }

    return(
        <div className={`question${step !== id ? '_disabled' : ''} animate__animated animate__fadeIn`}>
            <div className='question__title'>
                 {question}
            </div>
            <QuestionForm 
                input={input} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                showResponse={showResponse}
                value={value}
            />
            <div className="question__result" style={{ visibility:showResponse?'visible':'hidden'}}>
                { status  
                    ? <div className="question__result_correct">Correct</div> 
                    : <div className="question__result_wrong">Incorrect, correct answer is {response}</div>
                }
            </div>
            <div className='question__next' style={{visibility:showResponse?'visible':'hidden'}} >
                <button onClick={handleClick}>Next</button>
            </div> 
        </div>
    );
}