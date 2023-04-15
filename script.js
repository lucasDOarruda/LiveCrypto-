var baseUrl = "https://api.coinranking.com/v2/coins"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey= "coinranking9839ecbde6d8dd5e49f197db1308a5b152a9d46a9ab8d6db"

fetch(`${proxyUrl}${baseUrl}` , {
  method: "GET",
  headers: {
    'content-Type' : 'application/json',
    'x.access-token': `${apiKey}`,
    'access-Control-Allow-Origin': '*'
    } 
  }).then((response)=>{
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data.coins)

        let coinsData = json.data.coins
        
        if(coinsData.length > 0 ){
          var cryptoCoins = ""
        }

          //for loop starts

          coinsData.forEach((coins) => {
            cryptoCoins += "<tr>"
            cryptoCoins += `<td> ${coins.uuid} </td>`;
            cryptoCoins += `<td> ${coins.btcPrice} <td>`;
            cryptoCoins += `<td> ${coins.rank} </td>`;
            cryptoCoins += `<td> ${coins.name} </td>`;
            cryptoCoins += `<td> ${coins.price} </td>`;cryptoCoins += `<td> ${coins.symbol} </td>`; "<tr>"
      
          })
                document.getElementById("data").innerHTML =cryptoCoins
        
      })
    }
    
  }).catch ((error) =>{
    console.log(error)
  })