import React, { useState } from 'react';
import { QuestionResult } from './QuestionResult';
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
        setValue('');
    }

    const handleChange = ( event ) => {
        setValue(event.target.value);
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
            { showResponse && (
                <>
                    <QuestionResult status={status} response={response} />
                    <div className='question__next animate__animated animate__fadeIn'>
                        <button onClick={nextStep}>Next</button>
                    </div> 
                </> ) 
            }
        </div>
    );
}