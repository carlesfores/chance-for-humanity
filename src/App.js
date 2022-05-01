import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Question } from './components/Question';
import { Results } from './components/Results';
import { questions } from './data/questions.js';

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
      { showResult &&
        <Results progress={progress} />
      }
      <ProgressBar progressLength={progress.length} totalSteps={totalSteps}/>  
    </div>
  );
}

export default App;
