import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

/* 
Создай галерею с возможностью клика по её элементам и 
просмотра полноразмерного изображения в модальном окне. 

1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону 
элемента галереи.
2. Реализация делегирования на div.gallery и получение url большого изображения.
3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) 
файлы библиотеки.
4. Открытие модального окна по клику на элементе галереи. 
Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
5. Добавь закрытие модального окна по нажатию клавиши Escape. 
чтобы прослушивание клавиатуры было только пока открыто модальное окно. 
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
