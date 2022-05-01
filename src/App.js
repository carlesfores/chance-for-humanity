import React, { useState } from 'react';
import './App.css';
import { ProgressBar } from './components/ProgressBar';
import { Question } from './components/Question';
import { Result } from './components/Result';
import { questions } from './data/questions.js';

function App() {

  const [ step, setStep ] = useState(1);
  const [ progress, setProgress ] = useState([]);
  const [ showResult, setShowResult ] = useState(false);
  const totalSteps = questions.length;

  const updateProgress = ( status ) => {
    setProgress([
      ...progress,
      {
        'step': step,
        'status': status
      }
    ])
  };

  const nextStep = () => {
    if (totalSteps > step ) {
      setStep( step + 1);
    } else {
      setShowResult( true );
    }
  };

  return (
    <div className='container'>
      { !showResult ?
        <div className='questions'>
          {
            questions.map( ( question ) => 
              <Question
                key={ question.id }
                updateProgress= { updateProgress }
                nextStep= { nextStep }
                step={ step }
                { ...question }
              /> 
            )
          }
        </div>
        :
        <Result progress={ progress } />
      }
      <ProgressBar progressLength={ progress.length } questionsLength={ questions.length }/>  
    </div>
  );
}

export default App;
