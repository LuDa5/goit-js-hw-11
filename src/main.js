import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery, showNotification } from './js/render-functions';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

function showLoadingIndicator() {
  loader.style.display = 'block';
}

function hideLoadingIndicator() {
  loader.style.display = 'none';
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const queryInput = event.target.elements.query;
  const query = queryInput.value.trim();
  
  if (!query) {
    showNotification('error', 'Please enter a search term.');
    return;
  }

  clearGallery();
  showLoadingIndicator();

  queryInput.value = '';

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      showNotification('error', 'No images matching your search query. Try again!');
      return;
    }
    renderGallery(data.hits);
    lightbox.refresh();
  } catch (error) {
    showNotification('error', 'Failed to fetch images.');
  } finally {
    hideLoadingIndicator();
  }
});