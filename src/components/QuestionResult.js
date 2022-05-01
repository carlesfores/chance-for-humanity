import React from "react";

export const QuestionResult = ( { status, response } ) => {

    return(
        <div className="question__result animate__animated animate__fadeIn">
            { status  
                ? <div className="question__result_correct">Correct</div> 
                : <div className="question__result_wrong">Incorrect, correct answer is {response}</div>
            }
        </div>
    );
}