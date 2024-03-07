const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function handelInput(event) {
  const userName = event.target.value.trim();
  if (!userName) {
    nameOutput.textContent = "Anonymous";
  }
  else {
    nameOutput.textContent = userName;
  }
}

input.addEventListener("input", handelInput);
