// types -- int, float, string, boolean, ID (key for data objects, basically serialized strings. Unique type)
// ! means required. If outside the array (but not inside, the value inside the array is allowed to be nullable. If ! also inside array, it must be the type)
// Query type is required. It defines entry points to graph and specifies return types of those entry points

export const typeDefs = `#graphql
  type Game {
    id: ID!,
    title: String!,
    platform: [String!]!
    reviews: [Review!]
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addGame(game: AddGameInput): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput!): Game
  }

  input AddGameInput {
    title: String!,
    platform: [String!]!
  }

  input EditGameInput {
    title: String,
    platform: [String!]
  }
`