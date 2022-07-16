let dotWasPressed = false;
let OperatorPressed = "";
let wasEqualsPressed = false;
let firstNum = "";
let secondNum = "";

function buildNumber(digit) {
  if (wasEqualsPressed === true) {
    wasEqualsPressed = false;
    if (OperatorPressed === "") {
      firstNum = ""; //if after they pressed "=" they pressed a number, we restart.
    } else {
      secondNum = "";
    }
  }

  if (dotWasPressed === true && digit === ".") {
    //if "." exists, and was pressed again, dont do anything
  } else {
    if (OperatorPressed === "") {
      if (digit === ".") {
        dotWasPressed = true;
        if (firstNum == "") {
          firstNum = "0";
        }
      }
      firstNum += digit;
      showNumber();
    } else {
      if (digit === ".") {
        dotWasPressed = true;
        if (secondNum == "") {
          secondNum = "0";
        }
      }
      secondNum += digit;
      showNumber();
    }
  }
}

function showNumber(showSpecificNmber) {
  if (showSpecificNmber !== undefined) {
    document.getElementById("result").innerText = showSpecificNmber;
    return; //an option to give this function an order to show a specific number;
  }
  if (OperatorPressed === "") {
    //if the operator was not pressed means we are talking about the first num
    document.getElementById("result").innerText = firstNum;
  } else if (wasEqualsPressed === false) {
    document.getElementById("result").innerText = secondNum;
  } else {
    switch (OperatorPressed) {
      case "+":
        firstNum = document.getElementById("result").innerText =
          +firstNum + +secondNum;
        resetCalc();
        break;
      case "-":
        firstNum = document.getElementById("result").innerText =
          +firstNum - +secondNum;
        resetCalc();
        break;
      case "*":
        firstNum = document.getElementById("result").innerText =
          +firstNum * +secondNum;
        resetCalc();
        break;
      case "/":
        firstNum = document.getElementById("result").innerText =
          +firstNum / +secondNum;
        resetCalc();
        break;
    }
  }
}

function operatorInput(operator) {
  //checking that the user did not press an operator twice
  if (OperatorPressed !== "") {
    return;
  }

  OperatorPressed = operator;
  dotWasPressed = false; //allowing dot to be pressed in the second number
  switch (operator) {
    case "+":
      document.getElementById("addition").style.backgroundColor = "yellow";
      break;
    case "-":
      document.getElementById("reduction").style.backgroundColor = "yellow";
      break;
    case "*":
      document.getElementById("multiplication").style.backgroundColor =
        "yellow";
      break;
    case "/":
      document.getElementById("division").style.backgroundColor = "yellow";
      break;
  }
}

function equalsWasPressed() {
  if (OperatorPressed === "") {
    return;
  }
  //OperatorPressed = ""; when he presses "=", he can press a num or an operator. if he presses a number after the operator it's truble. How would we know if we don't reset this value.
  wasEqualsPressed = true;
  resetOperatorsColor();
  showNumber();
}

function resetCalc() {
  dotWasPressed = false;
  OperatorPressed = "";
  //   firstNum = ""; we can't do that because the user might want to reuse this value for the next calculation.
  secondNum = "";
  resetOperatorsColor();
}

function resetOperatorsColor() {
  document.getElementById("addition").style.backgroundColor =
    "rgb(160, 161, 160)";
  document.getElementById("reduction").style.backgroundColor =
    "rgb(160, 161, 160)";
  document.getElementById("multiplication").style.backgroundColor =
    "rgb(160, 161, 160)";

  document.getElementById("division").style.backgroundColor =
    "rgb(160, 161, 160)";
}

function C() {
  firstNum = "";
  resetCalc();
  showNumber();
  wasEqualsPressed = false;
}

function backSlash() {
  if (OperatorPressed === "") {
    firstNum = firstNum.slice(0, -1);
    if (firstNum === "") {
      showNumber(0);
      return;
    }
  } else {
    secondNum = secondNum.slice(0, -1);
    if (secondNum === "") {
      showNumber(0);
      return;
    }
  }

  showNumber();
}

function CE() {
  if (OperatorPressed === "") {
    firstNum = "";
    showNumber(0);
  } else {
    secondNum = "";
    showNumber(0);
  }
}

function plusMinus() {
  if (OperatorPressed === "") {
    if (firstNum.charAt(0) !== "") {
      //first letter of the string
      if (firstNum.charAt(0) === "-") {
        firstNum = firstNum.slice(0, 1); //remove the minus
      } else {
        firstNum = "-" + firstNum;
      }
    }
  } else {
    if (secondNum.charAt(0) !== "") {
      //first letter of the string
      if (secondNum.charAt(0) === "-") {
        secondNum = secondNum.slice(0, 1); //remove the minus
      } else {
        secondNum = "-" + secondNum;
      }
    }
  }
  showNumber();
}
