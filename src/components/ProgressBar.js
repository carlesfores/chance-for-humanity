import React from 'react';

export const ProgressBar = React.memo(( { progressLength, questionsLength } ) => {

    return (
        <div 
            className='progress' 
            style={{width: `${(progressLength/questionsLength) * 100}vw`}}>
        </div>  
    );
});