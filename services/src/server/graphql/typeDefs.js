import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Article {
    id: ID!
    name: String
    index: Int
    chapter: Chapter
    sections: [Section]
  }

  type Chapter {
    id: ID!
    name: String
    index: Int
    articles: [Article]
  }

  type Section {
    id: ID!
    name: String
    index: Int
    article: Article
    type: String
    text: String
  }

  type Query {
    chapters: [Chapter]
    chapter(id: Int!): Chapter
    allArticles: [Article]
    articles(chapterId: Int!): [Article]
    allSections: [Section]
    sections(articleId: Int!): [Section]
  }
`;

export default typeDefs;
