import React from 'react';

export const Result = ( {  progress } ) => {

    const correct = progress.filter( (p) => p.status );
    const percentage = ( correct.length / progress.length ) * 100;

    return(
        <div className='result animate__animated animate__fadeIn'>
            <div className='result__title'> RESULTS </div>
            <div className='result__content'>
                <div className='result__question'>
                    <ul>
                        {
                            progress.map( (p) => {
                                const { step, status } = p;
                                return(
                                    <li key={ step }> Question { step }</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='result__status'>
                    <ul>
                        {
                            progress.map( (p) => {
                                const { step, status } = p;
                                return <li key={ step }>{ status ? 'Correct': 'Incorrect' } </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='result_veredict animate__animated animate__fadeIn animate__delay-1s'>
                    <div>
                        The veredict is {percentage}% of correct answers,
                        the humanity will { percentage > 60 ? 'continue':'disapear' }
                    </div>
                </div>
        </div>
    );
}