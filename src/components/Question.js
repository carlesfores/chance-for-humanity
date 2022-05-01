import React, { useState } from 'react';
import { QuestionResult } from './QuestionResult';
import { QuestionForm } from './QuestionForm';

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
        updateProgress(result);
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
            <div className='question__form'>
                <QuestionForm 
                    input={input} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange} 
                    showResponse={showResponse}
                    value={value}
                />
            </div>
            {
                showResponse &&
                    <QuestionResult status={status} response={response} />
            }
            {
                showResponse && 
                    <div className='question__next'>
                        <button onClick={nextStep}>Next</button>
                    </div>
            }
        </div>
    );
}