const cashOut = document.getElementById("cash-out");

cashOut.addEventListener("click", (event) => {
  event.preventDefault();
  const accountNumber = getValueByID("account-number-cash", 1);
  const pinNumber = getValueByID("pin-number-cash", 1);
  const inputBalance = getValueByID("input-cash-balance", 1);
  const message = document.getElementById("message-cash");

  if (accountNumber.length === 13) {
    if (pinNumber === "1234") {
      if (inputBalance !== "") {
        totalBalance = totalBalance - parseFloat(inputBalance);
        message.innerText = "BDT " + inputBalance + " Removed Succesfully";

        const transactionsHistory = document.getElementById(
          "transactions-history"
        );
        const p = document.createElement("p");
        p.innerText = `${inputBalance} Taka Removed from ${accountNumber}`;
        p.classList.remove("text-green-600", "bg-green-100");
        p.classList.add("text-red-600", "bg-red-100", "p-2");
        transactionsHistory.appendChild(p);
      } else {
        message.innerText = "Balance Field Empty !!";
      }
    } else {
      message.innerText = "Your PIN incorrect !!";
    }
  } else {
    message.innerText = "Account Number Incorrect !!";
  }
});
