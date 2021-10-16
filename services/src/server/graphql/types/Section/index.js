import { Article } from "##/db/models";

export default {
  article: async (section) => Article.findByPk(section.articleId),
};
