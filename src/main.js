import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import axios, { isCancel, AxiosError } from 'axios';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const onSearchFormSubmit = e => {
  e.preventDefault();
  clearGallery();
  showLoader();
  const searchValue = e.target.elements['search-text'].value.trim();
  if (searchValue === '') {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    searchValue;
    return;
  }
  getImagesByQuery(searchValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(hits);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
