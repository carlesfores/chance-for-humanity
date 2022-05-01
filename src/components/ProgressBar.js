import React from 'react';

export const ProgressBar = React.memo(( { progressLength, totalSteps } ) => {

    return (
        <div 
            className='progress' 
            style={{width: `${(progressLength/totalSteps) * 100}vw`}}>
        </div>  
    );
});