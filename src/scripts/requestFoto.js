import { elements } from './object';
import { createElPagination, navPagination, showPages } from './pagination';

export async function requestFoto() {
  const res = await fetch(elements.url);
  const data = await res.json();
  elements.arrResult = [...data];
  createElPagination();
  showPages(elements.items[0]);
  navPagination();
}
