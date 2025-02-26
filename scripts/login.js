const logIn = document.getElementById("login-button");
const accountNumber = document.getElementById("account-number");
const pinNumber = document.getElementById("pin-number");
const msgError = document.getElementById("error-msg");

logIn.addEventListener("click", (event) => {
  event.preventDefault();
  if (accountNumber.value.length === 13) {
    if (pinNumber.value === "1234") {
      window.location.href='./main.html';
    } else {
      msgError.innerText = "Wrong Pin Number !!";
      msgError.classList.remove("invisible");
    }
  } else {
    msgError.innerText = "Please Input Right Account Number.";
    msgError.classList.remove("invisible");
  }
});
