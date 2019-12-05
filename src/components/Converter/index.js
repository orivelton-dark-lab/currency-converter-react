import React, { useState } from 'react';

const Converter = ({coinA, coinB}) => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const updateValueB = (e) => setValueB(e.target.value);
  const converter = async () => {
    const toCoin = `${coinA}_${coinB}`;
    const url = `http://free.currencyconverterapi.com/api/v5/convert?q=${toCoin}&compact=y&apiKey=9b7c22b4b5135843d9c7`;

    const getData = await fetch(url);
    const data = await getData.json();

    const currency = data[toCoin].val;

    setValueA(parseFloat(valueB * currency).toFixed(2));

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
