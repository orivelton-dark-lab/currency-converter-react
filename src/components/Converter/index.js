import React, { useState } from 'react';
import GetApi from '../../services/Api'

const Converter = ({coinA, coinB}) => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const updateValueB = (e) => setValueB(e.target.value);
  const converter = async () => {
    const data = await GetApi(coinA, coinB, valueB);
    setValueA(data);
  }

  return(
    <>
      <h2>{coinA} to {coinB}</h2>
      <input type="text" onChange={updateValueB}/>
      <button type="button" onClick={converter}>Converter</button>
      <p>Result: {valueA} </p>
    </>
  )
}

export default Converter;
