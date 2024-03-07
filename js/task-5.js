const button = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");
function handleClick(event) {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  colorOutput.textContent = backgroundColor;
}
button.addEventListener( "click", handleClick );
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

