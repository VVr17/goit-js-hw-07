import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

/* 
Создай галерею с возможностью клика по её элементам и 
просмотра полноразмерного изображения в модальном окне. 
*/

const gallery = document.querySelector('.gallery');

function createGallery(galleryItems) {

  const galleryElements = galleryItems
    .map(item => {

      const element = document.createElement('a');
      element.classList.add('gallery__link');
      element.href = `${item.original}`;

      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.preview;
      image.dataset.source = `${item.original}`;
      image.alt = `${item.description}`;
      
      element.append(image);
      return element;
    })

    gallery.append(...galleryElements);
}

createGallery(galleryItems)