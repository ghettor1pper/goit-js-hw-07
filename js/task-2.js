const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
for (const immageItem of images) {
  const image = document.createElement("img");
  image.setAttribute("src", immageItem.url);
  image.setAttribute("alt", immageItem.alt);
  image.classList.add("gallery-image");
  const listItem = document.createElement("li");
  listItem.append(image);
  gallery.append(listItem);
}
