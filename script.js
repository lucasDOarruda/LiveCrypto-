const options = {
    headers: {
      'Content-Type': 'application/json',
       'x-access-token': 'coinranking9839ecbde6d8dd5e49f197db1308a5b152a9d46a9ab8d6db',
    },
  };
  
  fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd', options)
    .then((response) => response.json())
    .then((result) => console.log(result));