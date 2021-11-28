import { elements } from './object';

export function transitionBigImages() {
  elements.blockPopup.classList.add('popupOn');
  let bigUrl = urlBigImages(this.id);
  elements.imgPopup.setAttribute('src', bigUrl);
}

export function createArrIdUrl(noteId, urlBig) {
  let obj = {};
  obj[noteId] = urlBig;
  elements.arrUrlBigImages.push(obj);
}

export function urlBigImages(id) {
  let url = elements.arrUrlBigImages.map((item) => {
    if (Object.keys(item) == id) return String(Object.values(item));
  });
  url = String(url.filter(Boolean));
  return url;
}

export function closeBlockBigImage() {
  elements.blockPopup.classList.remove('popupOn');
}
