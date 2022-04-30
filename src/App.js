import React, { useState } from 'react';
import { questions } from './data/questions';
import './App.css';
import { Questions } from './components/Questions';

function App() {

  const [ step, setStep ] = useState(1);
  const [ progress, setProgress ] = useState([]);

  return (
    <div>
      <Questions questions={ questions } />
    </div>
  );
}

export default App;
