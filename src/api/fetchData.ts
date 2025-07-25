import type { THighlightSlides } from '../types/types';

export default async function fetchData(): Promise<THighlightSlides[]> {
  // local server
  // const res = await fetch('http://localhost:3000/highlightSlides');
  // if (!res.ok) {
  //   throw new Error('Failed to fetch highlights');
  // } else {
  //   const data = await res.json();
  //   return data;
  // }

  // fetch github repo db by using jsdelivr cdn
  const res = await fetch(
    'https://cdn.jsdelivr.net/gh/ChunTyng/jsDelivr-db/db.json',
  );
  if (!res.ok) {
    throw new Error('Failed to fetch highlights');
  } else {
    const data = await res.json();
    return data.highlightSlides;
  }
}
