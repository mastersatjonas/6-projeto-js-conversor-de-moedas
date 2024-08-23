document.addEventListener('DOMContentLoaded', () => {
  const amountInput = document.getElementById('amount');
  const fromCurrencySelect = document.getElementById('from-currency');
  const toCurrencySelect = document.getElementById('to-currency');
  const convertButton = document.getElementById('convert');
  const resultParagraph = document.getElementById('result');

  async function fetchExchangeRates() {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      return data.rates;
  }

  async function convertCurrency() {
      const amount = parseFloat(amountInput.value);
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;

      if (isNaN(amount)) {
          resultParagraph.textContent = 'Por favor, insira um valor válido.';
          return;
      }

      const rates = await fetchExchangeRates();
      const rate = rates[toCurrency] / rates[fromCurrency];
      const convertedAmount = amount * rate;

      resultParagraph.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }

  convertButton.addEventListener('click', convertCurrency);

  async function populateCurrencyOptions() {
      const rates = await fetchExchangeRates();
      const currencies = Object.keys(rates);
      currencies.forEach(currency => {
          const optionFrom = document.createElement('option');
          optionFrom.value = currency;
          optionFrom.textContent = currency;
          fromCurrencySelect.appendChild(optionFrom);

          const optionTo = document.createElement('option');
          optionTo.value = currency;
          optionTo.textContent = currency;
          toCurrencySelect.appendChild(optionTo);
      });
  }

  populateCurrencyOptions();
});

