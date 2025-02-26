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

function toggleBox(id,status){
  document.getElementById(id).style.display = status;
}

function genarateTID() {
  return Math.floor(10000000 + Math.random() * 90000000);
} 
