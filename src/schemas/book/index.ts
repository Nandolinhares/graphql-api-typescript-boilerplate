import { gql } from "apollo-server-core"
import { buildSchema } from "graphql"

export const BookType = gql`
type Book {
  title: String
  author: String
}`
