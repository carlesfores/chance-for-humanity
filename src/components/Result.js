import React from 'react';

export const Result = ( {  progress } ) => {

    const correct = progress.filter((p) => p.result);
    const percentage = (correct.length/progress.length ) * 100;

    return(
        <div className='result animate__animated animate__fadeIn'>
            <div className='result__title'>Results</div>
            <div className='result__content'>
                <ul>
                    {
                        progress.map((p) => {
                            const {step, question, result} = p;
                            return <li key={step}>{step}) {question}<span>{result ? 'Correct': 'Incorrect'}</span></li>
                        })
                    }
                </ul>
            </div>
            <div className='result__veredict animate__animated animate__fadeIn animate__delay-1s'>
                <div>
                    You got {percentage}% of the questions right, humanity
                    {percentage > 50 ? ' is safe':' will disappear'}
                </div>
            </div>
        </div>
    );
}