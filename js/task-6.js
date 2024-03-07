function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesContainer = document.querySelector("#boxes");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
function destroyBoxes() {
  const childBoxesElementCount = boxesContainer;
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}
function handleCreateButton(event) {
  const ammount = input.value;
  if (ammount > 100 || ammount < 1) {
    return;
  }
  destroyBoxes();
  console.log(ammount);
  const startWidth = 30;
  const incrementWidth = 10;
  const startHeight = 30;
  const incrementHeight = 10;
  for (let index = 0; index < ammount; index++) {
    const element = document.createElement("div");
    element.style.width = startWidth + index * incrementWidth + "px";
    element.style.height = startHeight + index * incrementHeight + "px";
    element.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(element);
  }
}
function handleDestroyButton(event) {
  destroyBoxes();
}
createButton.addEventListener("click", handleCreateButton);
destroyButton.addEventListener("click", handleDestroyButton);
