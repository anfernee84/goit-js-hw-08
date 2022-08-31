// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);
///////////////////////////////////////////////////////////create gallery/////////////////
const rootGallery = document.querySelector('.gallery');
const imageGallery = createGallery(galleryItems);
rootGallery.insertAdjacentHTML('afterbegin', imageGallery);

function createGallery(arrOfObj) {
  return arrOfObj
    .map(elem => {
      const { preview, original, description } = elem;
      return `<a 
      class="gallery__item" href=${original}>
      <img class="gallery__image" 
      src=${preview} 
      alt=${description} /></a>`;
    })
    .join('');
}
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
  overlay: true,
  close: false,
  showCounter: false,
  fadeSpeed: 200,
});
