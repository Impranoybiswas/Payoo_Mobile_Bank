toggleBox("add-money-section", "none");
toggleBox("cash-out-section", "none");
toggleBox("transactions-section", "none");

const addMoneyButton = document.getElementById("add-money-button");
addMoneyButton.addEventListener("click", () => {
  toggleBox("add-money-section", "block");
  toggleBox("cash-out-section", "none");
  toggleBox("transactions-section", "none");
});

const cashOutButton = document.getElementById("cash-out-button");
cashOutButton.addEventListener("click", () => {
  toggleBox("add-money-section", "none");
  toggleBox("cash-out-section", "block");
  toggleBox("transactions-section", "none");
});

const transactionsButton = document.getElementById("transactions-button");
transactionsButton.addEventListener("click", () => {
  toggleBox("add-money-section", "none");
  toggleBox("cash-out-section", "none");
  toggleBox("transactions-section", "block");
});

const logOut = document.getElementById("logout-button");
logOut.addEventListener("click", () => {
  window.location.href = "./index.html";
});

let addMoneyRow = `<div>
<h1 class='font-bold'>Add Money</h1>
<p class='text-xs'><span class='font-semibold'>${bankName}</span> : ${accountNumber}</p>
<p class='text-xs'>TID : ${genarateTID()}</p>
</div>
<div class='text-right'>
<p class='text-green-800 font-semibold'> + ${inputBalance}</p>
<p class='text-xs'>${timeTH}</p>
</div>`;
const outMoneyRow = ``;
