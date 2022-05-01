import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Question } from './components/Question';
import { Result } from './components/Result';
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
      { !showResult ?
        <div className='questions'>
          {
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
        </div>
        :<Result progress={progress} />
      }
      <ProgressBar progressLength={progress.length} totalSteps={totalSteps}/>  
    </div>
  );
}

export default App;
