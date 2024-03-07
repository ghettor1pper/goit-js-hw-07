const categoriesList = document.querySelectorAll("#categories .item");
const catergoriesItemsCount = categoriesList.length;
console.log("Categories count: " + catergoriesItemsCount);
for (const category of categoriesList) {
  const header = category.querySelector("h2");
  console.log("Category name: " + header.innerText);
  const list = category.querySelectorAll("li");
  console.log("Categories elementss count: " + list.length);
}
