
 module.exports = {
  esportes,
  app,
  noticias,
};

const { Headers } = require('cross-fetch');
const fetch = require('node-fetch');
var fs = require('fs');



 
 function getXML(urlRequest) {
  return new Promise((resolve) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/rss+xml');
    headers.append('Accept', 'application/rss+xml');
    headers.append('GET');//, 'POST', 'OPTIONS');
    //headers.append('Access-Control-Allow-Credentials', 'true');
    
    fetch(
      urlRequest,
      {
        method: 'GET',
        headers: headers,
      }
    ).then(checkResponseStatus)
      .then((response) => 
        response.text()
        )
      .then((contents) => {
        resolve(contents);
      }).catch(err => {
          console.log(err)
          resolve('error')
      });
  });
}

function checkResponseStatus(res) {
    if(res.ok){
        return res
    } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}


async function esportes(){
    let data = await getXML("https://jovempan.com.br/esportes/feed");

    if(data!='error'){
    await fs.writeFileSync('./XML/esporte.xml', data,{encoding:'utf8'}, function (
    err
  ) {
    if (err) return console.log(err);
  });
  }
}

async function app(){
    let data = await getXML("https://appnewsdelivery.tk/static/pt_br_rss.xml");

    if(data!='error'){
    await fs.writeFileSync('./XML/app.xml', data,{encoding:'utf8'}, function (
    err
  ) {
    if (err) return console.log(err);
  });
  }
}

async function noticias(){
    let data = await getXML("https://jovempan.com.br/noticias/feed");

    if(data!='error'){
    await fs.writeFileSync('./XML/noticias.xml', data,{encoding:'utf8'}, function (
    err
  ) {
    if (err) return console.log(err);
  });
  }
}

