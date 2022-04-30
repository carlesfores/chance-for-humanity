import React from 'react';
import { Question } from './Question';

export const Questions = ( { questions } ) => {
    console.log(questions);
    return(
        <>
            {
                questions.map( ( question ) => <Question { ...question } /> )
            }
        </>
    );
}