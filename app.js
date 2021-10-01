const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const resultContainer = document.querySelector(".result");
const equalButton = document.querySelector(".equal");
const deleteButton = document.querySelector(".delete");
const pointButton = document.querySelector(".point");
const zeroButton = document.querySelector(".zero");
const allClearButton = document.querySelector(".ac");
let result = 0;
let a = 0;
let b = 0;
let isOperationClicked = false;
let isEqualClicked = false;
let isAssignedA = false;
let isAssignedB = false;
let operation = undefined;
let number = undefined;
let op = undefined;

numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", function () {
    resultContainer.innerHTML += numberButton.id;
    number = numberButton.id;
    if (isOperationClicked == true) {
      if (isAssignedB == true) {
        b += numberButton.id;
        console.log(b + " b");
      } else {
        b = resultContainer.innerHTML;
        console.log(b + " b");
        isAssignedB = true;
      }
    } else {
      if (isAssignedA == true) {
        a += numberButton.id;
        console.log(a + " a");
      } else {
        a = resultContainer.innerHTML;
        console.log(a + " a");
        isAssignedA = true;
      }
    }
  });
});

allClearButton.addEventListener("click", function () {
  resultContainer.innerHTML = "";
  a = 0;
  b = 0;
  result = 0;
  isOperationClicked = false;
  isEqualClicked = false;
  isAssignedA = false;
  isAssignedB = false;
  operation = undefined;
  number = undefined;
  op = undefined;
});

pointButton.addEventListener("click", function () {
  if (
    !resultContainer.innerHTML == "" &&
    !resultContainer.innerHTML.includes(".")
  ) {
    resultContainer.innerHTML += ".";
    if (isOperationClicked == true) {
      b = resultContainer.innerHTML;
      console.log(b + " b");
      console.log(a + " a");
    } else {
      a = resultContainer.innerHTML;
      console.log(a + " a");
      console.log(b + " b");
    }
  }
});

zeroButton.addEventListener("click", function () {
  if (resultContainer.innerHTML == "") {
    resultContainer.innerHTML += "0" + ".";
  } else {
    resultContainer.innerHTML += "0";
    if (isOperationClicked == true) {
      b = resultContainer.innerHTML;
      console.log(b + " b");
      console.log(a + " a");
    } else {
      a = resultContainer.innerHTML;
      console.log(a + " a");
      console.log(b + " b");
    }
  }
});

deleteButton.addEventListener("click", function () {
  if (resultContainer.innerHTML != "") {
    var newContainer = resultContainer.innerHTML.substr(
      0,
      resultContainer.innerHTML.length - 1
    );
  }

  if (newContainer != undefined) {
    resultContainer.innerHTML = newContainer;
    if (isOperationClicked == true) {
      b = resultContainer.innerHTML;
      console.log(b + " b");
      console.log(a + " a");
    } else {
      a = resultContainer.innerHTML;
      console.log(a + " a");
      console.log(b + " b");
    }
  }
});

operationButtons.forEach(function (operationButton) {
  operationButton.addEventListener("click", function () {
    resultContainer.innerHTML = "";
    console.log(operationButton.id);
    operation = operationButton.id;

    if (isAssignedB == false) {
      op = operationButton.id;
      console.log(op + " op");
    }
    if (
      isEqualClicked == false &&
      isAssignedB == true &&
      isAssignedA == true &&
      isOperationClicked == true
    ) {
      switch (op) {
        case "+":
          a = Number(a) + Number(b);
          b = 0;
          isAssignedB = false;
          isAssignedA = true;
          console.log(a + " a");
          console.log(b + " b");
          break;
        case "-":
          a = Number(a) - Number(b);
          b = 0;
          isAssignedB = false;
          isAssignedA = true;
          console.log(a + " a");
          console.log(b + " b");
          break;
        case "*":
          a = Number(a) * Number(b);
          b = 0;
          isAssignedB = false;
          isAssignedA = true;
          console.log(a + " a");
          console.log(b + " b");
          break;
        case "/":
          a = Number(a) / Number(b);
          b = 0;
          isAssignedB = false;
          isAssignedA = true;
          console.log(a + " a");
          console.log(b + " b");
          break;
        case "%":
          a = (Number(a) * Number(b)) / 100;
          b = 0;
          isAssignedB = false;
          isAssignedA = true;
          console.log(a + " a");
          console.log(b + " b");
          break;
        case "radic":
          a = Math.sqrt(Number(a));
          b = 0;
          isAssignedB = false;
          isAssignedA = true;
          console.log(a + " a");
          console.log(b + " b");
          break;
      }
    }
    isOperationClicked = true;
  });
});

equalButton.addEventListener("click", function () {
  isEqualClicked = true;
  switch (operation) {
    case "+":
      result = Number(a) + Number(b);
      break;
    case "-":
      result = Number(a) - Number(b);
      break;
    case "*":
      result = Number(a) * Number(b);
      break;
    case "/":
      result = Number(a) / Number(b);
      break;
    case "%":
      result = (Number(a) * Number(b)) / 100;
      break;
    case "radic":
      result = Math.sqrt(Number(a));
      break;
  }
  console.log(result);
  a = result;
  b = 0;
  isAssignedB = false;
  isAssignedA = true;
  console.log(a + " a");
  resultContainer.innerHTML = result;
  isEqualClicked = false;
  isOperationClicked = false;
});
