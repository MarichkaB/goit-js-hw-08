// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const imgGallery = document.querySelector('.gallery');
const imgMarkup = galleryItems
  .map(
    item => `<div><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`
  )
  .join('');

imgGallery.insertAdjacentHTML('beforeend', imgMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionType: 'alt',
});
