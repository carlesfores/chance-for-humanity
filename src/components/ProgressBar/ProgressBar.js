import React from 'react';
import './ProgressBar.scss'
import { getPercentage } from '../../util/util.js';

export const ProgressBar = React.memo(( { progressLength, totalSteps } ) => {
    
    const percentage = getPercentage(progressLength, totalSteps);
    return <div className='progress' style={{width: `${percentage}vw`}}> </div>  
});