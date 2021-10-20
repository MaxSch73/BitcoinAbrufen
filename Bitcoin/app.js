const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const spanUSD = document.querySelector('#USD');
const spanEUR = document.querySelector('#EUR');
const spanGBP = document.querySelector('#GBP');
const btn = document.querySelector('.button');

let currencyUSD = 'USD';
let currencyEUR = 'EUR';
let currencyGBP = 'GBP';

btn.addEventListener('click', () => {
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      let priceUSD = data.bpi[currencyUSD].rate;
      let priceEUR = data.bpi[currencyEUR].rate;
      let priceGBP = data.bpi[currencyGBP].rate;
      spanUSD.innerText = priceUSD + ' ' + currencyUSD;
      spanEUR.innerText = priceEUR + ' ' + currencyEUR;
      spanGBP.innerText = priceGBP + ' ' + currencyGBP;
    }
  };

  XHR.open('GET', API_URL);
  XHR.send();
});
