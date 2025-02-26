function getValueByID(id, i) {
  const getID = document.getElementById(id);
  const inputValue = getID.value;
  const otherValue = getID.innerText;
  if (i == 1) {
    return inputValue;
  } else {
    return otherValue;
  }
}

function toggleBox(id, status) {
  document.getElementById(id).style.display = status;
}

function genarateTID() {
  return Math.floor(10000000 + Math.random() * 90000000);
}

function messageColor(message, color) {
  if (color === "red") {
    message.classList.add("text-red-500");
    message.classList.remove("text-green-500");
  } else if (color === "green") {
    message.classList.add("text-green-500");
    message.classList.remove("text-red-500");
  }
}
