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
  const bankName = getValueByID("bank-name", 1);

  if (accountNumber.length === 13) {
    if (pinNumber === "1234") {
      if (inputBalance !== "") {
        if (inputBalance > 0) {
          totalBalance = totalBalance + parseFloat(inputBalance);
          message.innerText = "BDT " + inputBalance + " Added Succesfully";
          message.classList.add("text-green-500");
          message.classList.remove("text-red-500");

          const timeTH = new Date().toLocaleString();
          const transactionsHistory = document.getElementById(
            "transactions-history"
          );
          const thRow = document.createElement("div");
          thRow.classList.add(
            "flex",
            "justify-between",
            "items-end",
            "p-3",
            "mb-2",
            "bg-green-100",
            "rounded-sm"
          );
          thRow.innerHTML = `
        <div>
        <h1 class='font-bold'>Add Money</h1>
        <p><span class='font-semibold'>${bankName}</span> : ${accountNumber}</p>
        <p class='text-xs'>TID : ${genarateTID()}</p>
        </div>
        <div class='text-right'>
        <p class='text-green-800 font-semibold'> + ${inputBalance}</p>
        <p class='text-xs'>${timeTH}</p>
        </div>
        `;
          transactionsHistory.appendChild(thRow);
          document.getElementById("input-balance").value = "";
        } else {
          message.innerText = "Balance Field Empty or Negative !!";
          message.classList.add("text-red-500");
          message.classList.remove("text-green-500");
        }
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
