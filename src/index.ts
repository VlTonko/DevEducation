import { elements } from './scripts/object';
import { requestFoto } from './scripts/requestFoto';
import { createElPagination, navPagination, showPages, createBlocksImage, changeClassNumPage } from './scripts/pagination';
import { transitionBigImages, createArrIdUrl, urlBigImages } from './scripts/showBigImage';
import { closeBigImageX } from './scripts/listener';
import './style.css';

requestFoto();
closeBigImageX();
