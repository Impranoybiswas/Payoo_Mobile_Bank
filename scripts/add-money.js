const mainBalance = document.getElementById("main-balance");

let totalBalance = 2400;
let toggle = true;

mainBalance.addEventListener("click", () => {
  if (toggle) {
    mainBalance.innerText = "BDT " + totalBalance;
    toggle = false;
  } else {
    mainBalance.innerText = "Check Balance";
    toggle = true;
  }
});

const addAmount = document.getElementById("add-amount");

addAmount.addEventListener("click", (event) => {
  event.preventDefault();
  const accountNumber = getValueByID("account-number", 1);
  const pinNumber = getValueByID("pin-number", 1);
  const inputBalance = getValueByID("input-balance", 1);
  const message = document.getElementById("message");
  

  if (accountNumber.length === 13) {
    if (pinNumber === "1234") {
      if (inputBalance !== "") {
        totalBalance = totalBalance + parseFloat(inputBalance);
        message.innerText = "BDT " + inputBalance + " Added Succesfully";
        message.classList.add("text-green-500");
        message.classList.remove("text-red-500");

        const transactionsHistory = document.getElementById(
          "transactions-history"
        );
        const p = document.createElement("p");
        p.innerText = `${inputBalance} Taka Added in ${accountNumber}`;
        p.classList.add("text-green-600", "bg-green-100", "p-2");
        p.classList.remove("text-red-600", "bg-red-100");
        transactionsHistory.appendChild(p);
      } else {
        message.innerText = "Balance Field Empty !!";
        message.classList.add("text-red-500");
        message.classList.remove("text-green-500");
      }
    } else {
      message.innerText = "Your PIN incorrect !!";
      message.classList.add("text-red-500");
      message.classList.remove("text-green-500");
    }
  } else {
    message.innerText = "Account Number Incorrect !!";
    message.classList.add("text-red-500");
    message.classList.remove("text-green-500");
  }
});
