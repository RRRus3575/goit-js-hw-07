import { galleryItems } from "./gallery-items.js";

const containerEl = document.querySelector(".gallery");

const cardsMarcup = createImageEl(galleryItems);

containerEl.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageEl(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    
    <a class="gallery__item" href ='${original}'>
    <img class='gallery__image' src='${preview}' alt='${description}' data-source='${original}'>
    </a>
    
    `;
    })
    .join("");
}
console.log(cardsMarcup);

containerEl.addEventListener("click", openImgClick);

function openImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  document.addEventListener("keydown", closeEsc);
  const modal = event.target.dataset.source;

  console.log(modal);

  var lightbox = new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    scrollZoom: false,
  });
}

function closeEsc(event) {
  if (event.code === "Escape" && lightbox.visible()) {
    lightbox.close();
    document.removeEventListener("keydown", closeEsc);
  }
}
