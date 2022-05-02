import React, { useState } from 'react';
import { QuestionForm } from './QuestionForm';
import { getQuestionById } from './../../util/util';
import './Question.scss';

export const Question = ( {
    step,
    nextStep,
    updateProgress
} ) => {

    const [value, setValue] = useState('');
    const [status, setStatus] = useState(true);
    const [showResponse, setShowResponse] = useState(false);
    const { id, question, response, input } = getQuestionById(step);

    const validateResponse = () => {
        return value.toLocaleLowerCase() === response.toLocaleLowerCase();
    }

    const resetStates = () => {
        setValue('');
        setStatus(true);
        setShowResponse(false);
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
        resetStates();
    }

    return(
        <div className={`question${step!==id?'_disabled':''} animate__animated animate__fadeIn`}>
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
            <div className="question__result" style={{visibility:showResponse?'visible':'hidden'}}>
                { status  
                    ?<div className="question__result_correct">Correct</div> 
                    :<div className="question__result_wrong">Incorrect, correct answer is {response}</div>
                }
            </div>
            <div className='question__next' style={{visibility:showResponse?'visible':'hidden'}} >
                <button onClick={handleClick}>Next</button>
            </div> 
        </div>
    );
}