function calculateResult() {
  const firstInput = document.getElementById("first-input").value;
  const operator = document.getElementById("operator").value;
  const secondInput = document.getElementById("second-input").value;
  let result;

  if (!Number(firstInput) || !Number(secondInput)) {
    alert("Enter valid numbers in inputs");
    return;
  }

  switch (operator) {
    case "-":
      result = Number(firstInput) - Number(secondInput);
      break;
    case "+":
      result = Number(firstInput) + Number(secondInput);
      break;
    case "*":
      result = Number(firstInput) * Number(secondInput);
      break;
    case "/":
      result = Number(firstInput) / Number(secondInput);
      break;
    default:
      alert("Enter valid operator in input");
      return;
  }

  const answerDiv = document.getElementById("answer");
  answerDiv.innerText = "Answer: " + result;
}

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculateResult);
