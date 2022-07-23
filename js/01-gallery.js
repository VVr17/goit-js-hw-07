import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

/* 
Создай галерею с возможностью клика по её элементам и 
просмотра полноразмерного изображения в модальном окне. 
*/

const galleryRef = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {

  const galleryMarkup = galleryItems
    .map(item => {

      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
          alt="${item.description}"
          />
        </a>
      </div>`
    })
  .join('')

  return galleryMarkup;
}

galleryRef.insertAdjacentHTML('beforeend',createGalleryMarkup(galleryItems))


galleryRef.addEventListener('click', onGalleryContainerClick);


function onGalleryContainerClick(event) {
  
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return
  };

  openLightboxImage(event.target.dataset.source);
  
}
  

function openLightboxImage(imageSourse) {

  const lightboxImage = basicLightbox.create(`
		<img width="1400" height="900" src="${imageSourse}">
	`, {
    onShow: () => {
      document.addEventListener('keydown', onEcsKeyDown);
    },
    onClose: () => {
      document.removeEventListener('keydown', onEcsKeyDown);
    }
  })

  function onEcsKeyDown(event) {
    if (event.code === "Escape") {
      lightboxImage.close()
    }
  }

  lightboxImage.show()
}




// *создание галлеери через createElement
/* 
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
*/