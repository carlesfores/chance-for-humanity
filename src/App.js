import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { Question } from './components/Question/Question';
import { Results } from './components/Results/Results';
import { questions } from './data/questions.js';
import './App.scss';

function App() {

  const [ step, setStep ] = useState(1);
  const [ progress, setProgress ] = useState([]);
  const [ showResult, setShowResult ] = useState(false);
  const totalSteps = questions.length;

  const updateProgress = ( result, question ) => {
    setProgress([
      ...progress,
      {
        'step': step,
        'question': question,
        'result': result
      }
    ])
  };

  const nextStep = () => {
    if (totalSteps > step) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className='main'>
      <div className={`main__section ${showResult?'disabled':''}`}>
        <Question
            step={step}
            nextStep= {nextStep}
            updateProgress= {updateProgress}
        /> 
      </div>
      <div className={`main__section ${!showResult?'disabled':''}`}>
        <Results progress={progress} />
      </div>  
      <ProgressBar progressLength={progress.length} totalSteps={totalSteps}/>  
    </div>
  );
}

export default App;
