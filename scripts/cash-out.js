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
        if (inputBalance > 0) {
          totalBalance = totalBalance - parseFloat(inputBalance);
          message.innerText = "BDT " + inputBalance + " Removed Succesfully";

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
            "bg-red-100",
            "rounded-sm"
          );
          thRow.innerHTML = `
        <div>
        <h1 class='font-bold'>Cash Out</h1>
        <p class='text-xs'><span class='font-semibold'>Account</span> : ${accountNumber}</p>
        <p class='text-xs'>TID : ${genarateTID()}</p>
        </div>
        <div class='text-right'>
        <p class='text-red-800 font-semibold'> - ${inputBalance}</p>
        <p class='text-xs'>${timeTH}</p>
        </div>
        `;
          transactionsHistory.appendChild(thRow);
          document.getElementById("input-cash-balance").value = "";
        }
      } else {
        message.innerText = "Balance Field Empty or Negative !!";
      }
    } else {
      message.innerText = "Your PIN incorrect !!";
    }
  } else {
    message.innerText = "Account Number Incorrect !!";
  }
});
