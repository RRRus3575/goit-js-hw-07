"use strink";
import { galleryItems } from "./gallery-items.js";

const containerEl = document.querySelector(".gallery");

const cardsMarcup = createImageEl(galleryItems);

containerEl.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageEl(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href ='${original}'>
    <img class='gallery__image' src='${preview}' alt='${description}' data-source="${original}"
    '>
    </a>
    </div>
    `;
    })
    .join("");
}

containerEl.addEventListener("click", openImgClick);

function openImgClick(event) {
  event.preventDefault();

  if (!event.target.nodeName !== "IMG") {
    return;
  }
  const modalImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${modalImg}" width="800" height="600">`
  );

  instance.show();
}
