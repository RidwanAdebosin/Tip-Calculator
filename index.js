const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const btnEl = document.getElementById("calculate");
const resultDisplay = document.getElementById("total");

const calculateTotal = () => {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  resultDisplay.innerText = totalValue.toFixed(2);
};

btnEl.addEventListener("click", calculateTotal);
