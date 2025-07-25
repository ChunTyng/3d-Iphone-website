import { queryOptions } from '@tanstack/react-query';
import fetchData from '../api/fetchData';
import { type THighlightSlides } from '../types/types';

export default function createTodoQueryOptions() {
  return queryOptions<THighlightSlides[]>({
    queryKey: ['highlightSlides'],
    queryFn: fetchData,
  });
}
