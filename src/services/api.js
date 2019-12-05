const GetApi = async (coinA, coinB, valueB) => {
  const toCoin = `${coinA}_${coinB}`;
    const url = `http://free.currencyconverterapi.com/api/v5/convert?q=${toCoin}&compact=y&apiKey=9b7c22b4b5135843d9c7`;
    const getData = await fetch(url);
    const data = await getData.json();
    const currency = data[toCoin].val;

    return (parseFloat(valueB * currency).toFixed(2))
}

export default GetApi;
