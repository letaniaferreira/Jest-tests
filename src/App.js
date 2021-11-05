import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const NewButtoColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button 
      style={{backgroundColor: buttonColor}}
      onClick={ () => setButtonColor(NewButtoColor)}
      >
      Change to {NewButtoColor}
      </button>
    </div>
  );
}

export default App;
