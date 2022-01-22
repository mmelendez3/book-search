// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
  _id: ID
  username: String!
  email: String!
  bookCount: Int
  savedBooks: [Book]
}
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type Book {
      bookId: ID!
      authors: [String]
      description: String
      title: String
      image: String
      link: String
  }
  type BookInput {
      authors: [String]
      description: String
      title: String
      bookId: String
      image: String
      link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  removeBook(bookId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;