import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isCapicua, setIsCapicua] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const checkCapicua = () => {
    const reversed = inputValue.split('').reverse().join('');
    setIsCapicua(inputValue === reversed);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Capicúa Checker</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingrese un texto o un número"
        />
        <button onClick={checkCapicua}>Check</button>
        {isCapicua !== null && (
          <p>{isCapicua ? 'It is a capicúa!' : 'It is not a capicúa!'}</p>
        )}
      </header>
    </div>
  );
}

export default App;
