//Cotação de moedas do dia.
const USD = 5.75;
const EUR = 6.2;
const GBP = 7.44;

// Manipulando o input com o Regex para receber apenas números.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
  console.log(amount.value);
  const hasNumberRegex = /\D+/g;
  amount.value = amount.value.replace(hasNumberRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(currency.value);

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    default:
      alert("Moeda não encontrada");
  }
};

function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol);
}
