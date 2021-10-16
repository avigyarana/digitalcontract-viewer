import { Article } from "##/db/models";

const fetchAllArticles = async (_, args) =>
  Article.findAll({ where: { articleId: args.articleId } });

export default fetchAllArticles;
