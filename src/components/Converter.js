import React, { useState } from 'react';

const Converter = ({coinA, coinB}) => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState(0);

  const updateValueB = (e) => setValueB(e.target.value);
  const converter = () => {
    console.log('Here');
  }
  return(
    <>
      <h2>{coinA} to {coinB}</h2>
      <input type="text" onChange={updateValueB}/>
      <button type="button" onClick={converter}>Converter</button>
    </>
  )
}

export default Converter;
