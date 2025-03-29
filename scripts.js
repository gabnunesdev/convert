//Cotação de moedas do dia.
const USD = 5.76;
const EUR = 6.24;
const GBP = 7.46;

//Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input com o Regex para receber apenas números.
amount.addEventListener("input", () => {
  console.log(amount.value);
  const hasNumberRegex = /\D+/g;
  amount.value = amount.value.replace(hasNumberRegex, "");
});

//Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();
  console.log(currency.value);

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
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
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;

    //Exibindo o resultado da conversão formatado.
    result.textContent = `${formatCurrencyBRL(amount * price).replace(
      "R$",
      ""
    )} Reais`;

    //Aplica a classe que exibe o footer com o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    //Remove a classe do footer, removendo ele da tela.
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter a moeda. Tente novamente mais tarde");
  }
}

// Formata o valor para o padrão brasileiro de moeda.
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
