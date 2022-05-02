import React, { useState } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Question } from '../Questions/Question';
import { Results } from '../Results/Results';
import { questions } from '../../data/questions.js';
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

  const onShowResults = () => {
    return showResult && (
      <Results progress={progress} />
    );
  }

  return (
    <div className='container'>
      { !showResult &&
        questions.map( ( question ) => 
          <Question
            key={question.id}
            updateProgress= {updateProgress}
            nextStep= {nextStep}
            step={step}
            {...question}
          /> 
        )
      }
      { onShowResults() }
      <ProgressBar progressLength={progress.length} totalSteps={totalSteps}/>  
    </div>
  );
}

export default App;
