import React from 'react';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <Converter coinA="USD" coinB="BRL" />
    </div>
  );
}

export default App;
