import { Books } from '../../models/books';

const books: Books[] = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export function getBooks() {
  return books;
}
