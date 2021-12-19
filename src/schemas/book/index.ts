import { gql } from 'apollo-server-core';

export const BookType = gql`
  type Book {
    title: String
    author: String
  }
`;
