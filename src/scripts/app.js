import { elements } from './object';
import { requestFoto } from './requestFoto';
import { createElPagination, navPagination, showPages, createBlocksImage, changeClassNumPage } from './pagination';
import { transitionBigImages, createArrIdUrl, urlBigImages } from './showBigImage';
import { closeBigImageX } from './listener';
import '../styles/style.css';

requestFoto();
closeBigImageX();
