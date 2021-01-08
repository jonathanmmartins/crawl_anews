
 module.exports = {
  esportes,
};

const { Headers } = require('cross-fetch');
const fetch = require('node-fetch');


 
 function esportesXML() {
  return new Promise((resolve) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/rss+xml');
    headers.append('Accept', 'application/rss+xml');
    headers.append('GET');//, 'POST', 'OPTIONS');
    //headers.append('Access-Control-Allow-Credentials', 'true');
    
    fetch(
      'https://jovempan.com.br/feed',
      {
        method: 'GET',
        headers: headers,
      }
    )
      .then((response) => response.text())
      .then((contents) => {
        resolve(contents);
      });
  });
}

async function esportes(){
    console.log(await esportesXML());
}
