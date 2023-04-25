var baseUrl = "https://api.coinranking.com/v2/coins/"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey = "coinranking9839ecbde6d8dd5e49f197db1308a5b152a9d46a9ab8d6db"

fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    'content-Type': 'application/json',
    'x.access-token': `${apiKey}`,
    'access-Control-Allow-Origin': '*'
  }
})
.then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      console.log(json.data);
      let coinsData = json.data.coins;

      if (coinsData.length > 0) {
        var cryptoCoin = "";
      }
      //For Loop Starts
      coinsData.forEach((coin) => {
        cryptoCoin += "<tr>";
        cryptoCoin += `<td><img src="${coin.iconUrl}" alt="${coin.symbol}"/> ${coin.symbol}</td>`;"<tr>";
        cryptoCoin += `<td> ${coin.uuid} </td>`;
        cryptoCoin += `<td> ${coin.btcPrice} </td>`;
        cryptoCoin += `<td> ${coin.rank}</td>`;
        cryptoCoin += `<td> ${coin.tier} </td>`;
        cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
        
      });
      //For Loop Ends
      document.getElementById("data").innerHTML = cryptoCoin;
    });
  }
})
.catch((error) => {
  console.log(error);
});



