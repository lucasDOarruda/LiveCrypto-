var baseUrl1 = "https://api.coinranking.com/v2/coins"
var proxyUrl1 = "https://cors-anywhere.herokuapp.com/"
var apiKey= "0df19f02-168a-423b-825d-449113b05237"

fetch(`${proxyUrl1}${baseUrl1}` , {
  method: "GET",
  headers: {
    'content-Type' : 'application/json',
    'x.access-token': `${apiKey}`,
    'access-Control-Allow-Origin': '*'
    } 
  }).then((response)=>{
    console.log(response)
  }).catch ((error) =>{
    console.log(error)
  })