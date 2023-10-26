const input = document.getElementById("amountEl");

const tip = document.getElementById("percentageEl");

const btn = document.getElementById("calculate");

const getInput = ("click", input) => {
    let result = input.target.value
  console.log(result);
};
