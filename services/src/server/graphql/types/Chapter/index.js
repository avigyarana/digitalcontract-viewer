import { Article } from "##/db/models";

export default {
  articles: async (chapter) =>
    Article.findAll({ where: { chapterId: chapter.id } }),
};
