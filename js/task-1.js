const categoriesList = document.querySelectorAll("#categories .item");
const categoriesItemsCount = categoriesList.length;
console.log("Categories count: " + categoriesItemsCount);
for (const category of categoriesList) {
  const header = category.querySelector("h2");
  console.log("Category name: " + header.innerText);
  const list = category.querySelectorAll("li");
  console.log("Categories elementss count: " + list.length);
}
