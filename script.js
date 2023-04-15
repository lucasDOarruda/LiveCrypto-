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
        console.log(json)
      })
    }
    
  }).catch ((error) =>{
    console.log(error)
  })