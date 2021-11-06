import { useState } from 'react';
import './App.css';

function App() {
  const [ disabled, setDisabled ] = useState(false);
  // const NewState = disabled === false ? true : false;
  const [ buttonColor, setButtonColor ] = useState('red');
  const NewButtoColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button 
      style={{backgroundColor: disabled === true ? 'gray' : buttonColor}}
      onClick={ () => setButtonColor(NewButtoColor)}
      disabled={disabled}
      >
      Change to {NewButtoColor}
      </button>
      <input 
        type="checkbox"
        id="disabled-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={ (e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disabled-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
