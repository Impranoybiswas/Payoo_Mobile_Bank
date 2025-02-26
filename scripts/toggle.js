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
