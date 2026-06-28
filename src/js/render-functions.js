import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${largeImageURL}">
          <img
            class="gallery__image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <ul class="gallery__info">
          <li class="gallery__info-item">
            <span class="gallery__info-label">Likes</span>
            <span class="gallery__info-value">${likes}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-label">Views</span>
            <span class="gallery__info-value">${views}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-label">Comments</span>
            <span class="gallery__info-value">${comments}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-label">Downloads</span>
            <span class="gallery__info-value">${downloads}</span>
          </li>
        </ul>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
