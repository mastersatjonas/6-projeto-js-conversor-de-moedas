const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value;

  const currencyValueToConvert = document.querySelector('.currency-value-to-convert');

  const currencyValueConverted = document.querySelector('.currency-value');

  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue);
}

convertButton.addEventListener('click', convertValues);


/*const convertBuntton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select')

function convertVelues() {
    const inputCurrencyVelue = document.querySelector('.input-currency').value;

    const currencyVelueToConvert = document.querySelector('.currency-velue-to-convert');

    const currencyVelueConverted = document.querySelector('.currency-velue');

    const dolarToday = 5.2;
    const euroToday = 6.2;

    if (currencySelect.value == "dolar") {
        currencyVelueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyVelue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyVelueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyVelue / euroToday);
    }

    currencyVelueToConvert.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputCurrencyVelue);


}
convertBuntton.addEventListener('click', convertVelues);*/
