import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

/* 
Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, 
которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, 
а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы галереи 
с подключенной библиотекой
*/

const galleryRef = document.querySelector('.gallery')

function createGalleryMarkup(galleryItems) {
  
  const galleryMarkup = galleryItems.map(({preview,original,description}) => 
    `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  ).join('')

  return galleryMarkup
}

galleryRef.insertAdjacentHTML('beforeend',createGalleryMarkup(galleryItems))


let gallery = new SimpleLightbox('.gallery a');
// console.log(gallery.options)
gallery.options.captionsData = 'alt';
gallery.options.captionDelay = 250;
