import { Article } from "##/db/models";

const fetchAllArticles = async (_, args) =>
  Article.findAll({ where: { chapterId: args.chapterId } });

export default fetchAllArticles;
