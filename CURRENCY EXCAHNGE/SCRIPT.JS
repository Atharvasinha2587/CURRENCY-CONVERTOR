async function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;
  const resultDiv = document.getElementById('result');

  if (!amount || isNaN(amount)) {
    resultDiv.textContent = '💥 Please enter a valid amount!';
    return;
  }

  try {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await res.json();
    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);

    resultDiv.textContent = `✅ ${amount} ${from} = ${converted} ${to}`;
  } catch (err) {
    resultDiv.textContent = '❌ Failed to fetch rate.';
  }
}
